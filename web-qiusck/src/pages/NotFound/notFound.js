
import './style.css';
import iranNavy from '../../assets/images/iranNavy.jpeg'
const NotFound=()=>{
    return (
        <>
        <div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="page-404" style={{background:`url(${iranNavy})`}}>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                
                <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                <span class="inner-status">Oops! You're lost</span>
                <span class="inner-detail">
                    We can not find the page you're looking for.
                   
                </span>
            </div>
        </div>
    </div>
</div>
		</div>
        </>
    )
}
export default NotFound