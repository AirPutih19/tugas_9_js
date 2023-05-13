function jualRisoles(){
var risol ={
    jenis: "Risoles Mayo",
    harga: 3000,
    omsetJualan: {
        purwakarta: "100/hari",
        bandung: "200/hari",
        garut: "150/hari",
        cimahi: "175/hari",

    }
    
} 
console.log(risol);
console.log("");
console.log(risol.omsetJualan)
for( var x in risol){
    console.log(risol[x])
}



} 

jualRisoles()