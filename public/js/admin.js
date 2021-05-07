//this is used ton send requests through java scripts

const deleteProduct=(btn)=>{  //we will pass this function in product.ejs ,,this function will be written after button delete

    // console.log('clicked');  //clicked--->output
    // console.log(btn);  //<button class="btn" type="button" onclick="deleteProduct(this)">Delete</button>--->output
    // console.log(btn.parentNode.querySelector('[name=productId'));//<input type="hidden" value="<%= product._id %>" name="productId">--->output
    // console.log(btn.parentNode.querySelector('[name=productId').value); //productId --->output

    const prodId=btn.parentNode.querySelector('[name=productId]').value;
    const csrf=btn.parentNode.querySelector('[name=_csrf]').value; 


    const productElement=btn.closest('article')// productElement---->closest ancestor article of btn
    //here we are not passing any json data

    fetch('/admin/product/'+prodId,{             //for sending http prequest,,in this we pass the url
        method:'DELETE',   //it specifies that it is a delete request
        headers:{
            'csrf-token':csrf       //it will look for 'csrf-token' key
        }
    })
    .then(result=>{
        //console.log(result);
        return result.json();
    })
    .then(data=>{
        console.log(data);
        productElement.parentNode.removeChild(productElement);  //to remove the product
    })
    .catch(err=>{
        console.log(err);
    });
}




