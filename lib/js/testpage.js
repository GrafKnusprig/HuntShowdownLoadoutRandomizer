function loadTest() {
    var allItems = [...weapons, ...tools, ...consumables, ...ammunition];
    allItems.forEach((item) => {
        var itemName = replaceSpaces(item.name);
        $('#test').append(
            '<div class="img-title">' + item.name +
            ' \$' + item.cost +
            (item.unlock !== undefined ? ' unlock: ' + item.unlock : ' rank: ' + item.rank) +
            '</div><img src="images/items/' +
            itemName +
            '.webp"/>'
        )
    })

}
function replaceSpaces(itemName) {
    return itemName.replace(/ /g, '_');
}