import React from "react";
import './cardList.css';
import productsList from "../product";


type MyProps = {
  data?: string,
  key?:string,
  index?:string
};
type MyState= {
  id: string,
  title: string,
  author: string,
  likes: number,
  views: number,
  checked: boolean,
  category: string,
  image:string ,
};

class Card extends React.Component<MyProps, MyState>{
  constructor(props:MyProps) {
    super(props);
    this.state = window.localStorage.getItem(`card${this.props.index}`)?
                 JSON.parse(window.localStorage.getItem(`card${this.props.index}`)as string):
                 { ...productsList.products[+(this.props.index as string)]};
  }
  render(){
    return (
      <div className="card" >
        <img className="card-img"
        src={this.state.image}
        ></img>
        <h3 className="card-text">{this.state.title}</h3>
        <p className="card-text">{this.state.author}</p>
        <span className="card-line"></span>
        <p className="card-text">{this.state.category}</p>
        <div className="card-likes">
          <img className="card-svg" 
               src="../src/assets/like-svgrepo-com.svg"
               alt="likes-img"
               onClick={this.like.bind(this)}>
          </img>
          <p className="card-likes-count">{this.state.likes}</p>
          <img className="card-svg"
               src="../src/assets/view-svgrepo-com.svg"
               alt="views-img">
          </img>
          <p className="card-likes-count">{this.state.views}</p>
          <img className="card-svg"
               src="../src/assets/star-svgrepo-com.svg"
               alt="cheked-img"
               onClick={this.check.bind(this)}>
          </img>
        </div>

      </div>
    );
  }
  check(e: React.SyntheticEvent<EventTarget>){
    (e.target as HTMLImageElement).src= this.state.checked?"../src/assets/star-svgrepo-com.svg":"../src/assets/fullStar-svgrepo-com.svg"
   this.setState(state => ({
      checked: (!state.checked)
    }));
  }
  like(e: React.SyntheticEvent<EventTarget>){
   if ( this.state.likes ===productsList.products[+(this.props.index as string)].likes){
     (e.target as HTMLImageElement).src="../src/assets/fullLike-svgrepo-com.svg";
     this.setState(state => ({
       likes: this.state.likes +1
     }));
   } else {
     (e.target as HTMLImageElement).src="../src/assets/like-svgrepo-com.svg";
     this.setState(state => ({
       likes: this.state.likes -1
     }));
   }
 }
  componentDidUpdate(){
    window.localStorage.setItem(`card${this.props.index}`, JSON.stringify(this.state))
  }
}



export default Card