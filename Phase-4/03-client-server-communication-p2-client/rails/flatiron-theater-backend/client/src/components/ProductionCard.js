function ProductionCard({production}) {
    const {title, budget, genre, image} = production
    return (
      <tr className="table-row">
       <td>{title}</td>
       <td>{genre}</td>
       <td>$ {budget}</td>
       <td><img style={{width:'100px'}} src={image}/></td>
       <button>Delete</button>
      </tr>
    );
  }
  
  export default ProductionCard;