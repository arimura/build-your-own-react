function createElement(type, props, ...children){
    return {
        type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    }
}

function createTextElement(text){
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            chilfren: [],
        }
    }
}

const Didact = {
    createElement,
}

/** @jsx Didact.createElement */
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
)

console.log(element)
