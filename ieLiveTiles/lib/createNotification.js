module.exports = function(text, imageUrl) {
    return "<tile>"+
        "<visual lang=\"en-US\" version=\"2\">" +
            "<binding template=\"TileSquare150x150PeekImageAndText04\" branding=\"name\">" +
                "<image id=\"1\" src=\"" + imageUrl + "\"/>" +
                "<text id=\"1\">" + text + "</text>" +
            "</binding>" +
            "<binding template=\"TileWide310x150ImageAndText01\" branding=\"name\">" +
                "<image id=\"1\" src=\"" + imageUrl + "\"/>" +
                "<text id=\"1\">" + text + "</text>" +
            "</binding>" +
            "<binding template=\"TileSquare310x310ImageAndText01\" branding=\"name\">" +
                "<image id=\"1\" src=\"" + imageUrl + "\"/>" +
                "<text id=\"1\">" + text + "</text>" +
            "</binding>" +
        "</visual>" +
    "</tile>";
};