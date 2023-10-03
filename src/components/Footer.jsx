export default function Footer({items}){

    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked === true).length;
    const percentageItems = Math.round((checkedItems/totalItems) * 100);
  
    return (
      <footer className="">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentageItems}%)</footer>
    )
    
  }