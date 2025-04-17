const dashBoard = function (){
    this.selectors = {
        productsSelect: value=>  `//a[@class='hrefch'][contains(text(),'${value}')]`,
        cartAdd:"//a[contains(text(),'Add to cart')]"
    };

    /**
     * @function selectProduct();
     * @example dashBoard.selectProduct();
     * @description this is to select required product on dashBoard
     */
    this.selectProduct = async function (value){
        const elem = $(this.selectors.productsSelect(value));
        await elem.click();
    };

    /**
     * @function addToCart();
     * @description click on add to cart button of certain product
     * @example dashBoard.addToCart();
     */
    this.addToCart = async function (){
        const elem = $(this.selectors.cartAdd);
        await elem.click();
    };

    /**
     * @function productToCart();
     * @description click on selected product and click on add to cart.
     * @example dashBoard.productToCart();
     */
    this.productToCart = async function(value){
        await this.selectProduct(value);
        const isPresent = $(this.selectots.cartAdd).isExisting();
        if(isPresent){
        await this.addToCart();
        } else {
            await $(this.selectors.cartAdd).waitForClickable();
            await this.addToCart();
        }
    };
}

module.exports = new dashBoard();