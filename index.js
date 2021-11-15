function newImage(name, assets, left, bottom){
name = document.createElement('img');
name.src = assets;
name.style.position = 'fixed';
name.style.left = left;
name.style.bottom = bottom;
document.body.append(name);
return name
}

function newItem(name, assets, left, bottom){
    name = document.createElement('img');
    name.src = assets;
    name.style.position = 'fixed';
    name.style.left = left;
    name.style.bottom = bottom;
    document.body.append(name);
    name.addEventListener('click', function(){
        name.remove()
    })
    return name
    }

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')

newImage('treeOne', 'assets/pine-tree.png', '450px', '200px')

newImage('treeTwo', 'assets/tree.png', '200px', '300px')

newImage('pillar', 'assets/pillar.png', '350px', '100px')

newImage('crate', 'assets/crate.png', '150px', '200px')

newImage('well', 'assets/well.png', '500px', '425px')

newItem('sword', 'assets/sword.png', '500px', '405px')



// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let treeone = document.createElement('img')
// treeone.src = 'assets/pine-tree.png'
// treeone.style.position = 'fixed'
// treeone.style.left = '450px'
// treeone.style.bottom = '200px'
// document.body.append(treeone)