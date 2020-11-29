import React from 'react'

const ReduxIcon = ({ id, role, title, focusable, clickHandler }) => {
    return (
        <svg
            id={id}
            role={role}
            aria-describedby={title}
            tabIndex={focusable ? 0 : null}
            viewBox="0 0 256 244"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            onClick={clickHandler}
        >
            <title>{title}</title>
            <path d="M177.380953 169.732752c9.447352-.977347 16.614309-9.121913 16.288538-18.895392-.325771-9.773479-8.47004-17.592263-18.243163-17.592263h-.651541c-10.098894.325783-17.917392 8.796132-17.591621 18.895393.325771 4.88674 2.280395 9.121914 5.212332 12.053958-11.076206 21.827436-28.016285 37.790785-53.426405 51.147873-17.26585 9.121914-35.183242 12.37974-53.100634 10.099262-14.659684-1.954696-26.06166-8.470349-33.228617-19.221175-10.424665-15.96335-11.401977-33.229829-2.606166-50.496309 6.189644-12.37974 15.962767-21.501654 22.152411-26.062611-1.303083-4.235174-3.257707-11.402392-4.23502-16.614914-47.23676 34.207177-42.350198 80.468311-28.016285 102.295747 10.750435 16.289132 32.577076 26.388394 56.684112 26.388394 6.515416 0 13.03083-.651566 19.546246-2.280479 41.698657-8.144566 73.298421-32.904046 91.215813-69.717484zm57.335654-40.397046c-24.758578-28.994655-61.244903-44.958004-102.943561-44.958004h-5.212332c-2.931937-5.864087-9.121581-9.773479-15.962767-9.773479h-.651541c-10.098894.325783-17.917392 8.796131-17.591622 18.895393.325771 9.773479 8.47004 17.592262 18.243163 17.592262h.651542c7.166956-.325782 13.356601-4.886739 15.962767-11.076609h5.863874c24.758577 0 48.214072 7.167218 69.389172 21.175871 16.288538 10.750827 28.016285 24.75948 34.5317 41.700177 5.538103 13.682871 5.212332 27.039959-.651541 38.442351-9.121582 17.26648-24.432807 26.714176-44.630595 26.714176-13.03083 0-25.410119-3.909392-31.925534-6.841435-3.583478 3.257826-10.098894 8.470348-14.659684 11.728175 14.008142 6.515652 28.342056 10.099261 42.024428 10.099261 31.273993 0 54.403717-17.266479 63.199527-34.532959 9.447352-18.895393 8.795811-51.473656-15.636996-79.16518zM69.22506 175.271057c.325771 9.773479 8.47004 17.592263 18.243163 17.592263h.651542c10.098893-.325783 17.917391-8.796132 17.591621-18.895393-.325771-9.773479-8.47004-17.592263-18.243163-17.592263h-.651541c-.651542 0-1.628854 0-2.280396.325783-13.356601-22.153219-18.894704-46.261134-16.94008-72.323745 1.303084-19.546958 7.818499-36.487655 19.220476-50.496308 9.447352-12.053957 27.690514-17.918045 40.069803-18.243828 34.531701-.651565 49.191385 42.351743 50.168697 59.618223 4.23502.977347 11.401977 3.257826 16.288538 4.886739C189.434471 27.365741 156.857395 0 125.583402 0 96.264034 0 69.22506 21.175871 58.474625 52.451004c-14.985455 41.700177-5.212332 81.771441 13.03083 113.372357-1.628853 2.280478-2.606165 5.864087-2.280395 9.447696z" fill="#764ABC"/>
        </svg>
    )
}

export default ReduxIcon
