// 🏢 DOM
const DOM_textArea = document.querySelector('#DOM_textArea')
const DOM_generate = document.querySelector('#DOM_generate')

const DOM_captureWrapper = document.querySelector('#captureWrapper')
const DOM_capture = document.querySelector('#DOM_capture');
const DOM_extractor = document.querySelector('#DOM_extractor')

const DOM_link = document.querySelector('#DOM_link')
const DOM_generatedImagePlaceholder = document.querySelector('#DOM_generatedImagePlaceholder')

// 👉 Beginning

const generate = () => {
    const DOM_generatedCanvas = document.querySelector('#DOM_generatedCanvas')
    if (DOM_generatedCanvas) DOM_generatedCanvas.remove();

    // 🔧 optional setting to hide the wrapper
    // DOM_captureWrapper.style.display = 'block'

    // Allow to up to 500 characters
    let input = DOM_textArea.value;
    if (input.length>500) input = input.substring(0,499) + '...'

    // Render the input in the to-be-converted DOM
    DOM_extractor.innerHTML = input;

    // 🧙‍♂️
    html2canvas(DOM_capture).then(canvas => {
        // create a canvas
        canvas.setAttribute('id', 'DOM_generatedCanvas')
        DOM_generatedImagePlaceholder.appendChild(canvas)

        // Create a download link
        const dataURL = canvas.toDataURL();
        DOM_link.setAttribute('href',dataURL)
    })

    // 🔧 optional setting to hide the wrapper
    // DOM_captureWrapper.style.display = 'none'
}

// execute when button is clicked
DOM_generate.addEventListener('click', generate)