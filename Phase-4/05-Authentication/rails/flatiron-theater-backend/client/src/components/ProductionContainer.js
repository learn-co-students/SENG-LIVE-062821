import ProductionCard from './ProductionCard'


function ProductionContainer({productions}) {
    return (
     <div>
         <table>{productions.map(production => <ProductionCard  key={production.id} production={production} />)}</table>
     </div>
    );
  }
  
  export default ProductionContainer;