import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './app.css'
// import BigNumber from 'bignumber.js'
// const a = new BigNumber('12341324523456234561342')
// const b = '1345234534562451234324523452345234512431252'

const  a = '2319'
const  b = '1'

const add = (a,b) => {
  const newA = a.split('').reverse()
  const newB = b.split('').reverse()


  if(newA.length>newB.length){
    const count =newA.length - newB.length
    for (let index = 0; index < count; index++) {
      newB.push('0')
    }
  }else{
    const count =newB.length - newA.length
    for (let index = 0; index < count; index++) {
      newA.push('0')
    }
  }
  let isMore =false
  const sum =[]
  for (let index = 0; index < newA.length; index++) {

    if(isMore){
      if((+newA[index] + +newB[index] + 1) >= 10){
        sum[index]=(+newA[index] + +newB[index] + 1)%10
        isMore = true
        if(newA.length === newB.length){
          sum[index+1] = (+newA[index] + +newB[index] + 1)/10
        }
      }else{
        sum[index]=(+newA[index] + +newB[index] + 1)
        isMore = false
      }
      
    }else{
      if((+newA[index] + +newB[index] ) >= 10){
        sum[index]=(+newA[index] + +newB[index] )%10
        isMore = true
      }else{
        sum[index]=(+newA[index] + +newB[index] )
        isMore = false
      }
    }



    // if((+newA[index] + +newB[index]) >= 10){

    //   sum[index] =( +newA[index] + +newB[index])%10
    //   if(isMore){
    //     sum[index]= +sum[index] + 1
    //     if( sum[index]>=10){
    //       sum[index]=sum[index]%10
    //       isMore=true
    //     }
    //   }
    //   isMore=true
    // }else{
    //   sum[index] =( +newA[index] + +newB[index])
    //   if(isMore){
    //     sum[index]= +sum[index] + 1
    //   }
    //   isMore=false
    // }
    // console.log(sum);
    // return sum.reverse().join('')
    
  }


  console.log(sum.reverse().join(''));
  


}
add (a,b)


// console.log(a.plus(b).toFixed());
ReactDOM.render(<div className='app'><App></App></div>, document.getElementById('root'))
