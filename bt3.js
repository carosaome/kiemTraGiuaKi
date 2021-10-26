let arr = [];
for(i = 0; i < 10; i++)
{
    let x = prompt();
    let check = true;

    for (j = 0; j < arr.length ; j ++ )
    {
        if(arr[j] === x)
        {
            check = false;
            break;
        }
    }

    if(check)
    {
        arr.push(x);
    }

    if (x == 0)
    {
        break;
    }
  
}   
console.log(arr);

