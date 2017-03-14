import { h, Component } from 'preact';
import style from './style';

function Home(props) {
	return (
		<div class={style.home}>
			<h1>Home with default prop: {props.foo}</h1>
			<p>The prop above is empty with the preact/devtools enabled.</p>
		</div>
	);
}

// class Home extends Component {
// 	render() {
// 		return (
// 			<div class={style.home}>
// 				<h1>Home with default prop: {this.props.foo}</h1>
// 				<p>The prop above is correct with the preact/devtools enabled.</p>
// 			</div>
// 		);
// 	}
// }

Home.defaultProps = {
	foo: 'bar'
};

export default Home;
