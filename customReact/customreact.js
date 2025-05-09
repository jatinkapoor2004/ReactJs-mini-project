const reactElement = {
    type :'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me'
}
const mainContainer = document.querySelector('.root');
function customRender(reactElement,mainContainer)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props)
    {
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

customRender(reactElement,mainContainer);