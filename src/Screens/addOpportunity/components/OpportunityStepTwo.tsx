import { View } from 'react-native'
import React, { useState } from 'react'
import CustomDropdownComponent from '../../../Components/CustomDropdown';
import { Styles } from '../../../styles';
import MText from '../../../Components/Text';
import InputBox from '../../../Components/InputBox';
import Button from '../../../Components/Button';

export const genderList = [
    { label: "Male", value: "male" },
    { label: "FeMale", value: "female" },
    { label: "Others", value: "others" },
]

export default function OpportunityStepTwo() {
    const [eventEndDate, setEventEndDate] = useState("");
    const [EventVenue, setEventVenue] = useState("");
    const [ContactNumber, setContactNumber] = useState("")

    return (
        <View style={{ alignItems: "center" }}>
            <CustomDropdownComponent
                data={genderList}
                label="Event End Date"
                placeholder='User Name'
                value={eventEndDate}
                dropdownStyle={Styles.dropdownStyle}
                onChange={(val) => {
                    setEventEndDate(val);
                }}
            />

            <View>
                <MText style={Styles.label}>Event Venue</MText>
                <InputBox
                    value={EventVenue}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setEventVenue(val)
                    }}
                    placeholder='User Name'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <View>
                <MText style={Styles.label}>Opportunity Description</MText>
                <InputBox
                    value={ContactNumber}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setContactNumber(val)
                    }}
                    placeholder='User Name'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <Button
                title="Create"
                textStyle={{ fontSize: 15 }}
                style={{ height: 52, marginTop: 18, borderRadius: 8 }}
            />
        </View>
    )
}