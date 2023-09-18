import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import CustomDropdownComponent from '../../../Components/CustomDropdown';
import { Styles } from '../../../styles';
import MText from '../../../Components/Text';
import InputBox from '../../../Components/InputBox';
import { Row, SpaceBetweenRow } from '../../../Components/Wrapper';
import CustomRadioButton from '../../../Components/CustomRadioButton';
import { Size } from '../../../constants';

export const genderList = [
    { label: "Male", value: "male" },
    { label: "FeMale", value: "female" },
    { label: "Others", value: "others" },
]

export default function OpportunityStepOne() {
    const [opportunityCategory, setOpportunityCategory] = useState("");
    const [opportunitySubject, setOpportunitySubject] = useState("");
    const [opportunityDescription, setOpportunityDescription] = useState("")
    const [OpportunityType, setOpportunityType] = useState("Life Saving")

    return (
        <View style={{ alignItems: "center", marginTop: 12 }}>
            <View style={{ alignItems: "flex-start", width: Size.wWidth / 1.2 }}>
                <MText style={styles.OpportunitySubject}>Opportunity Subject</MText>

                <SpaceBetweenRow style={{ width: Size.wWidth / 1.2, marginVertical: 10 }}>
                    <CustomRadioButton
                        title="Life Saving"
                        selectedVal={OpportunityType}
                        onPress={() => { setOpportunityType("Life Saving") }}
                    />

                    <CustomRadioButton
                        title="Material"
                        selectedVal={OpportunityType}
                        onPress={() => { setOpportunityType("Material") }}
                    />

                    <CustomRadioButton
                        title="Volenteers"
                        selectedVal={OpportunityType}
                        onPress={() => { setOpportunityType("Volenteers") }}
                    />
                </SpaceBetweenRow>
            </View>
            <CustomDropdownComponent
                data={genderList}
                label="Opportunity Category"
                placeholder='Education'
                value={opportunityCategory}
                dropdownStyle={Styles.dropdownStyle}
                onChange={(val) => {
                    setOpportunityCategory(val);
                }}
            />

            <View>
                <MText style={Styles.label}>Opportunity Subject</MText>
                <InputBox
                    value={opportunitySubject}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setOpportunitySubject(val)
                    }}
                    placeholder='User Name'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <View>
                <MText style={Styles.label}>Opportunity Subject</MText>
                <InputBox
                    value={opportunitySubject}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setOpportunitySubject(val)
                    }}
                    placeholder='User Name'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <View>
                <MText style={Styles.label}>Opportunity Description</MText>
                <InputBox
                    value={opportunityDescription}
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(val) => {
                        setOpportunityDescription(val)
                    }}
                    placeholder='User Name'
                    placeholderTextColor="#8D8D8D"
                />
            </View>

            <CustomDropdownComponent
                data={genderList}
                label="Event Start Date"
                placeholder='Opportunity Category'
                value={opportunityCategory}
                dropdownStyle={Styles.dropdownStyle}
                onChange={(val) => {
                    setOpportunityCategory(val);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    OpportunitySubject: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginTop: 14,
    }
})