"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = 
// 'http://localhost:8081';
'https://android-networktrace-api.herokuapp.com';
// tslint:disable:max-line-length
exports.TAXONOMIES = [
    {
        name: 'ID',
        label: 'ID',
        icon: 'android', taxonomies: [
            {
                name: 'GENERALID',
                label: 'General ID',
                icon: 'phone',
                purposes: [
                    { shortLabel: 'Tracking ADs', key: 'AD_TRACKING', label: 'for advertising through ID tracking ', },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_TRACKING', label: 'for data analytics through device tracking ' },
                    { shortLabel: 'Personalizing Sign-out experience', key: 'SIGNOUT_PERSONALIZATION', label: 'for personalizing Signed-out user experience' },
                    { shortLabel: 'Anti-fraud activities', key: 'ANTI_FRAUD', label: ' for fraud detection tasks ' },
                    { shortLabel: 'Authentication Activities', key: 'AUTHENTICATION', label: 'for authentication tasks (e.g. cookie)' }
                ],
                description: 'MAC address, IMEI number etc.'
            }
        ],
        description: 'IMEI number, software version etc. '
    },
    {
        name: 'PHONE',
        label: 'Phone',
        description: 'battery status, screen size, WiFi etc.',
        icon: 'phone', taxonomies: [
            {
                name: 'BATTERY',
                label: 'Battery',
                icon: 'battery_full',
                purposes: [
                    { shortLabel: 'Battery-based events', key: 'BATTERY_EVENT', label: 'for battery-based event trigger (charging, low battery)' },
                    { shortLabel: 'Power management tasks ', key: 'POWER_MANAGEMENT', label: 'for managing power tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
                ],
                description: 'Current battery percentages or charging status etc.'
            },
            {
                name: 'DEVICE',
                label: 'Device',
                icon: 'smartphone',
                purposes: [
                    { shortLabel: 'Customizing interfaces', key: 'INTERFACE_CUSTOMIZATION', label: 'for customizing interfaces' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
                ],
                description: 'Phone model, screen size, manufacturer info etc.'
            },
            {
                name: 'RUNNINGSTATE',
                label: 'Running State',
                icon: 'phone',
                purposes: [
                    'Cross-app communication',
                    'Task management'
                ],
                description: 'Data about currently running tasks on the device'
            },
            {
                name: 'NOTIFICATION',
                label: 'Notification',
                icon: 'notifications',
                purposes: [
                    'Notification interface personalization (e.g. lock screen)',
                    'Interruption management'
                ],
                description: 'Data about specific notifications and their history'
            },
            {
                name: 'NETWORK',
                label: 'Network',
                icon: 'network_wifi',
                purposes: [
                    { shortLabel: 'Network Notifications', key: 'NETWORK_NOTIFICATION', label: 'for network switch notifications' },
                    { shortLabel: 'Network Optimizations', key: 'NETWORK_OPTIMIZATION', label: 'for optimizing network' },
                    { shortLabel: 'Geo-Localization tasks', key: 'GEO_LOCALIZATION', label: 'for geo-localization' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
                ],
                description: 'Network conncectivity details like WiFi, LTE, 3G, 4G etc.'
            }
        ]
    },
    {
        name: 'PERSONAL',
        label: 'Personal',
        description: 'contact, emails and other calendar info',
        icon: 'person', taxonomies: [
            {
                name: 'ACCOUNT',
                label: 'Account',
                icon: 'account_circle',
                purposes: [
                    { shortLabel: 'Third-party login services', key: 'THIRDPARTY_LOGIN', label: 'for third-party login services' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertising personalization tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for personalization analytics through data collection' }
                ],
                description: 'Settings for tasks like syncing data from different services'
            },
            {
                name: 'CALENDAR',
                label: 'Calendar',
                icon: 'calendar_today',
                purposes: [
                    { shortLabel: 'Context Predicting', key: 'CONTEXT_PREDICT', label: 'for predicting context' },
                    { shortLabel: 'Scheduling Tasks', key: 'SCHEDULE', label: 'for scheduling tasks' },
                    { shortLabel: 'Alarms', key: 'ALARM', label: 'for alarm' }
                ],
                description: 'Calendar and time-related info.'
            },
            {
                name: 'CONTACTS',
                label: 'Contacts',
                icon: 'contacts',
                purposes: [
                    { shortLabel: 'Backup Tasks', key: 'BACKUP_SYNC', label: 'for backup and synchronization' },
                    { shortLabel: 'Managing contacts', key: 'CONTACT_MANAGE', label: 'for managing contacts' },
                    { shortLabel: 'Blacklisting calls', key: 'BLACKLIST', label: 'for blacklist and fake calls' },
                    { shortLabel: 'Calling + Messaging', key: 'CALL SMS', label: 'for call and messaging tasks' },
                    { shortLabel: 'Customizing contacts', key: 'CONTACT_CUSTOMIZATION', label: 'for contact-based customization' },
                    { shortLabel: 'Emailing', key: 'EMAIL', label: 'for email tasks' },
                    { shortLabel: 'Finding Friends', key: 'FIND_FRIENDS', label: 'to find friends' },
                    { shortLabel: 'Recording tasks', key: 'RECROD', label: 'for recording activities' },
                    { shortLabel: 'Detecting fake calling', key: 'FAKE_CAL', label: 'for detecting fake calls' }
                ],
                description: 'Name, phone number, email address etc.'
            },
            {
                name: 'SMS',
                label: 'Messaging',
                icon: 'textsms',
                purposes: [
                    'Send message',
                    'Organize message (clustering, delete, re-rank)',
                    'Extract message content',
                    'Block message',
                    'Schedule message',
                    'Backup/syncrhonize message'
                ],
                description: 'Data used for writing/reading users\' text messaging history'
            },
            {
                name: 'STORAGE',
                label: 'Storage',
                icon: 'sd_storage',
                purposes: [
                    'Access photo album (uploading/editing)',
                    'Download',
                    'Persistent storage'
                ],
                description: 'Info. needed to read/write the files on the storage'
            }
        ]
    },
    {
        name: 'SENSOR',
        label: 'Sensor',
        description: 'Like GPS coordinates, camera settings etc.',
        icon: 'ac_unit', taxonomies: [
            {
                name: 'CAMERA',
                label: 'Camera',
                icon: 'photo_camera',
                purposes: [
                    'Flashlight',
                    'Video streaming',
                    'Code scanning',
                    'Document scanning',
                    'Augment reality',
                    'Text recognition',
                    'Photo taking'
                ],
                description: 'Current camera settings for apps and websites'
            },
            {
                name: 'PROXIMITY',
                label: 'Proximity',
                icon: 'tap_and_play',
                purposes: [
                    'Speaker/display activation'
                ],
                description: 'Info used to detect distance between phone and body parts'
            },
            {
                name: 'LOCATION',
                label: 'Location',
                icon: 'location_on',
                purposes: [
                    { shortLabel: 'Localized searching', key: 'NEARBY_SEARCH', label: ' to localized and nearby searches' },
                    { shortLabel: 'Location-based customization', key: 'LOCATION_BASED_CUSTOMIZATION', label: 'for location-based customization' },
                    { shortLabel: 'Transportation information', key: 'TRANSPORTATION_INFO', label: 'for transportation information' },
                    { shortLabel: 'Recording Tasks', key: 'RECRODING', label: 'for recording activities' },
                    { shortLabel: 'Mapping + Navigation', key: 'MAP_NAVIGATION', label: 'for map and navigation tasks' },
                    { shortLabel: 'Geo based networking', key: 'GEOSOCIAL_NETWORK', label: 'for geosocial networking tasks' },
                    { shortLabel: 'Geotagging tasks', key: 'GEOTAGGING', label: 'for geotagging tasks' },
                    { shortLabel: 'Location spoofing', key: 'LOCATION_SPOOFING', label: 'for location spoofing' },
                    { shortLabel: 'Reminder tasks', key: 'ALERT_REMIND', label: 'for alerts and reminders' },
                    { shortLabel: 'Location based games', key: 'LOCATION_BASED_GAME', label: 'for location based games' },
                    { shortLabel: 'Reverse Geocoding tasks', key: 'REVERSE_GEOCODING', label: 'for reverse geocoding' },
                    { shortLabel: 'Advertizing data', key: 'AD_DATA', label: 'for advertisizing related tasks' },
                    { shortLabel: 'Data Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
                ],
                description: 'Location related GPS data from the phone + other Geospatial data'
            },
            {
                name: 'MICROPHONE',
                label: 'Microphone',
                icon: 'mic',
                purposes: [
                    { shortLabel: 'Voice Authentication tasks', key: 'VOICE_AUTHEN', label: 'for voice authentication tasks' },
                    { shortLabel: 'Audio Streaming', key: 'AUDIEO_STREAMING', label: 'for audio streaming activities' },
                    { shortLabel: 'Voice Control tasks', key: 'VOICE_CONTROL', label: 'for voice control tasks' },
                    { shortLabel: 'Speech Recog. tasks', key: 'SPEECH_REC', label: 'for speech recognition tasks' },
                    { shortLabel: 'Recording tasks', key: 'AUDIO_RECORD', label: 'for audio recording (e.g. voice message)' },
                    { shortLabel: 'Acoustics events', key: 'ACOUSTIC_EVENT_DETECT', label: 'for acoustic event detection' },
                    { shortLabel: 'Wireless communication', key: 'ACOUSTIC_COMMUNICATION', label: 'for acoustic wireless communication' },
                    { shortLabel: 'Music activtities', key: 'MUSIC', label: 'for music tasks' },
                ],
                description: 'Audio data collected from the phone, voice commands etc.'
            },
            {
                name: 'INERTIAL',
                label: 'Inertial',
                icon: 'blur_linear',
                purposes: [],
                description: 'Data from gyroscope, accelerometer etc.'
            }
        ]
    }
];
