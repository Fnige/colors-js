const { EmbedBuilder } = require('discord.js');

module.exports = {
    invalidColor: new EmbedBuilder()
        .setTitle('Invalid color')
        .setColor(0xcc0000)
        .setDescription('Please use a valid hex color (`#000000`)\nHashtag can be omitted'),
    missingPermsAdmin: new EmbedBuilder()
        .setTitle('Missing Permissions!')
        .setColor(0xcc0000)
        .setDescription('You do not have the "Manage Server" permission'),
    missingPermsUser: new EmbedBuilder()
        .setTitle('Missing Permissions!')
        .setColor(0xcc0000)
        .setDescription('You do not have the role for using colors'),
    missingPermsBot: new EmbedBuilder()
        .setTitle('Command failed!')
        .setColor(0xcc0000)
        .setDescription('I do not have the ability to edit or create your role.\nMake sure I have role permissions and that there are no user roles above me!'),
    roleLimitReached: new EmbedBuilder()
        .setTitle('Error')
        .setColor(0xcc0000)
        .setDescription('Maximum number of server roles reached (250). This bot is intended for smaller servers. Please ask a server admin to remove unused roles.'),
};