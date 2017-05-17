import React, { Component } from 'react'; 
// import React 的意思是将整个 React object 保存起来，而 { Component }加一个 中括号就是 仅仅 只提取其中的一个属性：component。
import { connect } from 'react-redux';
 
class BookList extends Component{
	  renderList(){
	     return this.props.books.map((book)=>{
	         return (
	            <li className = "list-group-item">{book.title}</li>
	         )
	     })
	   }

	  render(){
	    return (
	        <ul className = "List-group col-sm-4">
	           {this.renderList()}
	        </ul>
	    )
	  }
}

function mapStateToProps(state){
	return {
	   books: state.books // 如上所见， state 是一个 object 里面存储着所有 各个state 的数据
	}
}
     
	export default connect(mapStateToProps)(BookList);