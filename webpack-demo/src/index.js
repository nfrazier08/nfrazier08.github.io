import _ from 'lodash';

function component(){
    var element = document.createElement('div');

    //lodash imported for this line to work
    element.innerHTML = _.join([
        'Hello', 'webpack'
    ], ' ');

    return element;
}

document.body.appendChild(component());