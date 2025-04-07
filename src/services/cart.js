// Quais ações meu carrinho pode fazer


// CASOS DE USO:
// ✅ adicioanr item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// deletar item do carrinho
async function deleteItem(userCart, nameItem){
    const index = userCart.findIndex((item) => item.name === nameItem)
    if (index !== -1){
        userCart.splice(index, 1)
    }
}

// remover um item (diminuir a quantidade de itens de um item)
async function removeItem(userCart, indexItem){
    // transforma o indice visual do usuario para o índice de backend
    const deleteIndex = indexItem - 1

    // é maior que zero e se é menor que do que o tamanho do carrinho
    if (deleteIndex >= 0 && deleteIndex < userCart.length){
        userCart.splice(deleteIndex, 1)
    }
}


// calcular total
async function calcularTotal(userCart){
    console.log("\n Shoppe cartTotal")
    const result = userCart.reduce((total, item) => total += item.subtotal(), 0) // permite pegar todos os itens e reduzir a um valors
    console.log(result);
}

async function displayCart(userCart){
    console.log("\nShopee Cart List:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R${item.price} | Quantidade ${item.quantity} | Subtotal = ${item.subtotal()}`)
    })
}

export { addItem, calcularTotal, deleteItem, removeItem, displayCart}