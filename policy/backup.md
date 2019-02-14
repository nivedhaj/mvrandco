### Policy for backups
---

Each workstation (Laptop / Desktop) will have a user called "admin". It will have administration privileges. This account would be used 
for managing the backups and monitoring usage. Regular users will not have access to this account.

Agent software will be installed and configured in each workstation. 
It's job will be to facilitate backups and communicate with the server.

Backup policy for docs (Word / Excel / Text / PDF etc)
---

Folder c:/backup (in windows) and /var/backup (in Linux) will be created. The contents of the backup folder would be backed up. 
The rest of the files in other parts of the system are not backed up.

The contents of backup from each workstation would be backed up to the backup server.
- A full back up during set up
- An incremental backup every day
- A full backup every 7 days

Additionally the back up folder in the server is synced with either Google Drive or Amazon S3 based on the users' preference

Backups will be de-duplicated based on content. That is a file present in multiple workstations will be backed up only once to reduce the 
size of backup

User responsibilities
- Workstation(s) should not be turned off. They can be hibernated or put in sleep mode. 
This would enable backup process to be scheduled during idle times.
- All important file should be kept in the backup folder. 
- User(s) should not install software on their own. Any malware/virus that may get into the workstation will cause havoc later on.

Backup policy for Tally
---
To be done after due discussions

Backup policy for Relyonsoft
---
To be done after due discussions
