let container = document.querySelector('.container')
        let circle = document.querySelector('.circle')

        let lightTheme = true

        circle.addEventListener('click' , function themeChange() {
            if (lightTheme) {
                document.body.style.backgroundColor = '#584f4f'
                // circle.style.backgroundColor = '#ffffff'
                document.querySelector('.testimonial-container').style.backgroundColor = '#584f4f'
                document.querySelector('.feature-container').style.backgroundColor = '#584f4f'
                document.querySelector('.testimonial-card-image').style.backgroundColor = '#584f4f'
                document.querySelector('#card2').style.backgroundColor = '#584f4f'
                document.querySelector('#card3').style.backgroundColor = '#584f4f'
            }else{
                document.body.style.backgroundColor = '#ffffff'
                // circle.style.backgroundColor = 'black'
                document.querySelector('.testimonial-container').style.backgroundColor = '#ffffff'
                document.querySelector('.feature-container').style.backgroundColor = '#ffffff'
                document.querySelector('.testimonial-card-image').style.backgroundColor = '#ffffff'
                document.querySelector('#card2').style.backgroundColor = '#ffffff'
                document.querySelector('#card3').style.backgroundColor = '#ffffff'
            }

            lightTheme = !lightTheme
        })

       

        
