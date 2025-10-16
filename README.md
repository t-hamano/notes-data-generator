# Notes Data Generator

This plugin adds test users and test Notes to make it easier to test the block-level commenting feature.

## Download

> [!CAUTION]
> Do not use this plugin in production site.

[Download Notes Data Generator](https://github.com/t-hamano/notes-data-generator/archive/refs/heads/main.zip)

## Features

- Create 30 test users when the plugin is activated.
- Create notes from a random user, a random note, and a random date.
- Override the avatar URL of the test users to better visualize the avatar.
- All test users and test notes will be deleted when the plugin is deactivated.

## Prerequisites

This plugin works with WordPress 6.9 Beta and above.

## Installation

1. Download the zip from this repository
2. Upload the zip to the `wp-content/plugins` directory.
3. Activate the plugin through the 'Plugins' menu in WordPress. Once activated, 30 test users with username `test_user_{index}` will be created. The password of the test users will be randomly generated.

## Uninstallation

1. Deactivate the plugin through the 'Plugins' menu in WordPress. Once deactivated, all test users and test notes will be deleted.

## Screenshots

### Block Sidebar

![Block Sidebar](https://raw.githubusercontent.com/t-hamano/notes-data-generator/refs/heads/main/screenshot-1.png)

### Plugin Sidebar

![Plugin Sidebar](https://raw.githubusercontent.com/t-hamano/notes-data-generator/refs/heads/main/screenshot-2.png)
