let x = 'xin chao cac ban';
let x_list = x.split(" ");

for(let i = 0; i < x_list.length; i++)
{
    let word = x_list[i][0].toUpperCase() + x_list[i].slice(1);
    console.log(word);
}



