import React from 'react'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

const LingoIcon = () => {
    return (
        <Svg width="40" height="40" viewBox="0 0 200 201" fill="none">
            <Path d="M0 100.5C0 18.15 17.65 0.5 100 0.5C182.35 0.5 200 18.15 200 100.5C200 182.85 182.35 200.5 100 200.5C17.65 200.5 0 182.85 0 100.5Z" fill="url(#paint0_linear_0_1)"></Path>
            <Path d="M120.731 158.333H88.9313C76.9313 158.333 68.2313 156.033 62.8313 151.433C57.5313 146.733 54.8813 139.133 54.8813 128.633V51.533H75.7313V128.633C75.7313 132.833 76.6813 135.733 78.5813 137.333C80.4813 138.933 83.9313 139.733 88.9313 139.733H120.731V158.333Z" fill="white"></Path>
            <Defs>
                <LinearGradient id="paint0_linear_0_1" x1="100" y1="0.5" x2="100" y2="200.5" gradientUnits="userSpaceOnUse">
                    <Stop stop-color="#FF003D"></Stop>
                    <Stop offset="1" stop-color="#B1032D"></Stop>
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default LingoIcon