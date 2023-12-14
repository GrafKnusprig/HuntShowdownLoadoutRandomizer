function loadTest() {
    var allItems = [...weapons, ...tools, ...consumables, ...ammunition];
    allItems.forEach((item) => {
        imageName = replaceSpaces(item.name)
        $('#test').append(
            '<div class="img-title">' + item.name +
                '</div><img src="images/items/' +
                imageName +
                '.webp"/>'
        )
    })

}
function replaceSpaces(itemName) {
    return itemName.replace(/ /g, '_');
}