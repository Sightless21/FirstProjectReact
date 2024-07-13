import { View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    title: string;
    year?: number; /* "?" is optional is mean "year in App.tsx" unnecessary to sent AppHeader */
}

const AppHeader = ({ title, year }: AppHeaderProps): React.JSX.Element => {
    return (
        <View>
            <Text>{title} {year && + 543}</Text>
        </View>
    )
}

export default AppHeader