import React from 'react'

const FirebaseIcon = ({ id, role, title, focusable, clickHandler }) => {
    return (
        <svg
            id={id}
            role={role}
            aria-describedby={title}
            tabIndex={focusable ? 0 : null}
            viewBox="0 0 256 351"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsxlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            onClick={clickHandler}
        >
            <title>{title}</title>
            <defs>
                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="b">
                <feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1"/>
                <feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowInnerInner1"/>
                </filter>
                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="d">
                <feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="shadowBlurInner1"/>
                <feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" in="shadowInnerInner1"/>
                </filter>
                <path d="M1.252734 280.731641l1.605611-3.130783 99.352832-188.517503-44.14985-83.475152C54.392-1.283046 45.074125.473674 43.86992 8.187891L1.252734 280.73164z" id="a"/>
                <path d="M134.417103 148.974235l32.038619-32.812497-32.038618-61.00705c-3.042276-5.791097-10.433193-6.397852-13.443276-.59004L103.26875 88.67383l-.529327 1.743717 31.67768 58.556688z" id="c"/>
            </defs>

            <path d="M0 282.99762l2.122507-2.97202L102.527363 89.511928l.21206-2.016796L58.478806 4.358177c-3.70818-6.964219-14.147503-5.203423-15.364458 2.592478L0 282.99762z" fill="#FFC24A"/>
            <use fill="#FFA712" fill-rule="evenodd" />
            <use filter="url(#b)"/>
            <path d="M135.004975 150.380704l32.955224-33.751243-32.964776-62.93015c-3.129314-5.956776-11.866606-5.97397-14.962805 0l-17.611603 33.588774v2.86066l32.58396 60.231959z" fill="#F4BD62"/>
            <use fill="#FFA50E" fill-rule="evenodd" />
            <use filter="url(#d)" />
            <path fill="#F6820C" d="M0 282.99762l.962097-.967224 3.495614-1.420836 128.477612-128 1.627702-4.430965-32.049902-61.073737z"/>
            <path d="M139.120971 347.551268l116.274945-64.847602-33.204218-204.494329c-1.038647-6.39809-8.88804-8.927522-13.467384-4.3399L.000254 282.997875l115.6082 64.547661c7.306189 4.079443 16.204418 4.081354 23.512517.005732" fill="#FDE068"/>
            <path d="M254.354084 282.159837l-32.952147-202.9419c-1.030762-6.349518-7.558145-8.976982-12.102724-4.424187L1.289453 282.600785l114.338372 63.908673c7.250723 4.048473 16.081401 4.050369 23.334021.005688l115.392238-64.355309z" fill="#FCCA3F"/>
            <path d="M139.120907 345.64082c-7.308099 4.075622-16.206328 4.073711-23.512517-.005731L.931348 282.014551l-.931157.983324 115.608199 64.547661c7.306189 4.079443 16.204418 4.081354 23.512517.005732l116.274946-64.847602-.284657-1.751881-115.990289 64.689035z" fill="#EEAB37"/>
        </svg>
    )
}

export default FirebaseIcon
