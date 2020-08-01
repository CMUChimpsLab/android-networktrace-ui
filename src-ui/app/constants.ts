import * as _ from 'lodash';

export const API_URL =
    // 'http://localhost:8081';
    'https://android-networktrace-api.herokuapp.com';

// tslint:disable:max-line-length
export const TAXONOMIES = [
    {
        name: 'ID',
        label: 'ID',
        icon: 'android', taxonomies: [
            {
                name: 'GENERALID',
                label: 'General ID',
                icon: 'language',
                purposes: [
                    { shortLabel: 'Tracking ADs', key: 'AD_TRACKING', label: 'for advertising through ID tracking ', },
                    { shortLabel: 'General Analytics', key: 'ANALYTIC_TRACKING', label: 'for data analytics through device tracking ' },
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
                    { shortLabel: 'Battery Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
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
                    { shortLabel: 'Device Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
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
                    { shortLabel: 'Network Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' }
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
                    { shortLabel: 'Account Analytics', key: 'ANALYTIC_DATA', label: 'for personalization analytics through data collection' }
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
                    { shortLabel: 'Location Analytics', key: 'ANALYTIC_DATA', label: 'for analytics through data collection' },
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


export const CloudSVGs = [
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 461 306">
   <g>
      <g id="Layer_2" data-name="Layer 2">
         <g id="Layer_1-2" data-name="Layer 1">
            <g class="cls-2">
               <path class="cloud_path" d="M117.88,88.6S50.49,47.69,17.73,124.26c0,0-14.87,51.55,34.22,66.92,0,0-42.38,53.87,25,92.38,0,0,65,24.06,93.87-31.29,0,0,38.51,33.69,77,0,0,0,7.22,31.29,60.17,31.29,0,0,40.92,2.4,50.54-36.11,0,0,79.43,26.48,86.65-45.73,0,0,4.81-50.54-55.36-57.76,0,0,14.44-40.92-26.47-62.58,0,0-21.67-19.25-67.39-2.4,0,0-12-65-89.06-65C206.93,14,132.32,14,117.88,88.6Z"/>
            </g>
         </g>
      </g>
   </g>
</svg>
    `,
    `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 781 515">
   <g>
      <g id="Layer_2" data-name="Layer 2">
         <g id="Layer_1-2" data-name="Layer 1">
            <g class="cls-2">
               <path class="cloud_path" d="M583.64,136.57s116-73.3,177.31,55.59c0,0,28.68,87.17-56.56,115.93,0,0,56.45,62.52-44.14,140.35,0,0-66.21,42.94-134.58,3.42,0,0-76.85,68.8-158.79,14.22,0,0-33.28,47.67-122.2,26.13,0,0-79.49-20.16-74.77-72.16,0,0-137.84,49.29-154.16-73.49,0,0-11-86,94.08-101.41,0,0-27.38-69,43.23-108.11,0,0,50.37-32.36,118-7.62,0,0,17.8-111.46,152.77-115.48C423.8,13.94,554.55,10.06,583.64,136.57Z"/>
            </g>
         </g>
      </g>
   </g>
</svg>
    `,
    `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 337 195">
   <g>
      <g id="Layer_2" data-name="Layer 2">
         <g id="Layer_1-2" data-name="Layer 1">
            <path class="cloud_path" d="M68.5,75.85S78.08,9.15,147,13.78c0,0,26.81-.93,51.71,30.57,0,0,46-23.16,76.61,14.83,0,0,12.45,13,8.62,35.2,0,0,52.67,5.56,33.51,62.08,0,0-5.74,18.53-25.85,21.31H68.5S16.79,175,15.83,125.88C15.83,125.88,10.08,80.49,68.5,75.85Z"/>
         </g>
      </g>
   </g>
</svg>`,
    `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 443 273">
   <g>
      <g id="Layer_2" data-name="Layer 2">
         <g id="Layer_1-2" data-name="Layer 1">
            <g class="cls-2">
               <path class="cloud_path" d="M356.46,80.4s63-7.88,70.87,57.74c0,0,5.24,65.62-78.75,49.87,0,0-18.37,73.49-123.36,42,0,0-25.12,36.94-82.11,21.09,0,0-36-5.34-51.75-47.33,0,0-69.9,28.45-75.95-51.89,0,0-2.79-66.22,78.58-61,0,0-14.22-61.73,59.06-69.51,0,0,53.69-8.22,70.89,30,0,0,10.67-53.45,87.63-33.93C311.57,17.46,360.57,32,356.46,80.4Z"/>
            </g>
         </g>
      </g>
   </g>
</svg>`
];


export const HomePageCompanies = [
    {hostCompanyName: 'Facebook, Inc.', hostIdentifier: 'facebook'},
    {hostCompanyName: 'Google LLC', hostIdentifier: 'google'},
    {hostCompanyName: 'Twitter, Inc.', hostIdentifier: 'twitter'}
];
