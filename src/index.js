
import PrintConsole from './PrintConsole'

const mainConsole = new PrintConsole( document.querySelector( 'main' ) )

mainConsole.log( undefined )

mainConsole.log( null )

mainConsole.log( true )

mainConsole.log( false )

mainConsole.log( 'Hi' )

mainConsole.log( 5 )

mainConsole.log( [ 'Tom', 'Patrick', 5, '5' ] )

mainConsole.log( [ 0, 1, 5, 2, [ 'hi', 'and', 'bye' ] ] )

mainConsole.log( {
	"value": 'property',
	secondValue: 5,
	thirdValue: [ 0, 5, 2, [ 'hi', 'and', 'bye' ] ],
	fourthValue: function() {
		return 'hi'
	}
} )

mainConsole.log( {
	value: {
		hi: 'bye',
		foo: 'bar'
	}
} )