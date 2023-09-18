import { View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import OnBoardingBGView from '../../Components/OnBoardingBGView/OnBoardingBGView';
import { styles } from '../OnBoardingLoginScreen/OnBoardingLoginScreenStyle';
import Header from '../../Components/Header/Header';
import MText from '../../Components/Text';
import { SpaceAroundRow } from '../../Components/Wrapper';
import OpportunityStepOne from './components/OpportunityStepOne';
import OpportunityStepTwo from './components/OpportunityStepTwo';

export const genderList = [
    { label: "Male", value: "male" },
    { label: "FeMale", value: "female" },
    { label: "Others", value: "others" },
]

const AddOpportunityScreen = () => {
    const [step, setStep] = useState(1);

    return (
        <OnBoardingBGView>
            <ScrollView style={styles.mainView}>
                <Header isBackEnable={true} title="Add a New Opportunity" />
                <View style={styles.iconView}>

                    <SpaceAroundRow>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => setStep(1)}>
                            <View style={step === 1 ? styles.stepOne : styles.stepOneSelected}>
                                <MText style={{ color: "#fff" }}>1</MText>
                            </View>
                            <MText style={step === 1 ? styles.stepOneText : styles.stepOneTextSelected}>Step 1</MText>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => setStep(2)}>
                            <View style={step === 2 ? styles.stepOne : styles.stepOneSelected}>
                                <MText style={{ color: "#fff" }}>2</MText>
                            </View>
                            <MText style={step === 1 ? styles.stepOneText : styles.stepOneTextSelected}>Step 2</MText>
                        </TouchableOpacity>
                    </SpaceAroundRow>

                    {step === 1 && <OpportunityStepOne />}
                    {step === 2 && <OpportunityStepTwo />}
                </View>
                <View style={styles.spacer} />
            </ScrollView>
        </OnBoardingBGView>
    );
};

export default AddOpportunityScreen;
