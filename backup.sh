#!/bin/bash

# Halloff.uz Backup Script
# Add to crontab for automated backups: 0 2 * * * /path/to/backup.sh

# Configuration
DB_USER="halloff_user"
DB_PASSWORD="YOUR_DB_PASSWORD"
DB_NAME="halloff_db"
BACKUP_DIR="/var/backups/halloff"
APP_DIR="/var/www/halloff.uz/data"
RETENTION_DAYS=30

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Date for backup files
DATE=$(date +%Y%m%d_%H%M%S)

echo -e "${YELLOW}🔄 Starting backup process...${NC}"

# Database backup
echo -e "${YELLOW}📊 Backing up database...${NC}"
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Database backup completed${NC}"
    gzip $BACKUP_DIR/db_backup_$DATE.sql
else
    echo -e "${RED}❌ Database backup failed${NC}"
    exit 1
fi

# Application files backup
echo -e "${YELLOW}📁 Backing up application files...${NC}"
tar -czf $BACKUP_DIR/app_backup_$DATE.tar.gz -C $APP_DIR \
    --exclude=node_modules \
    --exclude=.next \
    --exclude=logs \
    --exclude=*.log \
    .

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Application backup completed${NC}"
else
    echo -e "${RED}❌ Application backup failed${NC}"
    exit 1
fi

# Clean old backups
echo -e "${YELLOW}🧹 Cleaning old backups (older than $RETENTION_DAYS days)...${NC}"
find $BACKUP_DIR -name "*.sql.gz" -mtime +$RETENTION_DAYS -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete

# Backup summary
echo -e "${GREEN}📋 Backup Summary:${NC}"
echo -e "${YELLOW}Database backup: ${NC}$BACKUP_DIR/db_backup_$DATE.sql.gz"
echo -e "${YELLOW}Application backup: ${NC}$BACKUP_DIR/app_backup_$DATE.tar.gz"
echo -e "${YELLOW}Backup directory size: ${NC}$(du -sh $BACKUP_DIR | cut -f1)"

echo -e "${GREEN}✅ Backup process completed successfully!${NC}"

# Optional: Send notification (uncomment if needed)
# echo "Halloff.uz backup completed at $(date)" | mail -s "Backup Report" admin@halloff.uz