var int_formatter = new Intl.NumberFormat('en-US')

// Basic Function
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function roundTo(num, decimal) {
    return Math.round( ( num + Number.EPSILON ) * Math.pow( 10, decimal ) ) / Math.pow( 10, decimal )
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

// Object
function initialData() {
    equipInfo.forEach(function(item) {
        appendEquip(item, true)
    });
    unreleaseEquipInfo.forEach(function(item) {
        appendEquip(item, false)
    });
    setInfo.forEach(function(item) {
        appendSet(item)
    });

    loadCookie()
}

function weaponTypeSelect() {
    var weaponType = document.getElementById("inputWeaponType").value
    if (weaponType == "FOJ") {
        document.getElementById("inputWeaponStage").disabled = true;
    } else {
        document.getElementById("inputWeaponStage").disabled = false;
    }
}

function equipRadioSelect() {
    if (document.getElementById("inputEquipRadioAmet").checked) {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = false
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = false
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = false
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = false

        document.getElementById("inputEquipReforgeTopAmet").disabled = false
        document.getElementById("inputEquipReforgeBottomAmet").disabled = false
        document.getElementById("inputEquipReforgeGloveAmet").disabled = false
        document.getElementById("inputEquipReforgeShoesAmet").disabled = false

        document.getElementById("inputEquipUpgradeTopTene").disabled = true
        document.getElementById("inputEquipUpgradeBottomTene").disabled = true
        document.getElementById("inputEquipUpgradeGloveTene").disabled = true
        document.getElementById("inputEquipUpgradeShoesTene").disabled = true

        document.getElementById("inputEquipReforgeTopTene").disabled = true
        document.getElementById("inputEquipReforgeBottomTene").disabled = true
        document.getElementById("inputEquipReforgeGloveTene").disabled = true
        document.getElementById("inputEquipReforgeShoesTene").disabled = true

    } else if (document.getElementById("inputEquipRadioTene").checked) {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = true
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = true
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = true
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = true

        document.getElementById("inputEquipReforgeTopAmet").disabled = true
        document.getElementById("inputEquipReforgeBottomAmet").disabled = true
        document.getElementById("inputEquipReforgeGloveAmet").disabled = true
        document.getElementById("inputEquipReforgeShoesAmet").disabled = true

        document.getElementById("inputEquipUpgradeTopTene").disabled = false
        document.getElementById("inputEquipUpgradeBottomTene").disabled = false
        document.getElementById("inputEquipUpgradeGloveTene").disabled = false
        document.getElementById("inputEquipUpgradeShoesTene").disabled = false

        document.getElementById("inputEquipReforgeTopTene").disabled = false
        document.getElementById("inputEquipReforgeBottomTene").disabled = false
        document.getElementById("inputEquipReforgeGloveTene").disabled = false
        document.getElementById("inputEquipReforgeShoesTene").disabled = false

    } else {
        document.getElementById("inputEquipUpgradeTopAmet").disabled = false
        document.getElementById("inputEquipUpgradeBottomAmet").disabled = false
        document.getElementById("inputEquipUpgradeGloveAmet").disabled = false
        document.getElementById("inputEquipUpgradeShoesAmet").disabled = false

        document.getElementById("inputEquipReforgeTopAmet").disabled = false
        document.getElementById("inputEquipReforgeBottomAmet").disabled = false
        document.getElementById("inputEquipReforgeGloveAmet").disabled = false
        document.getElementById("inputEquipReforgeShoesAmet").disabled = false

        document.getElementById("inputEquipUpgradeTopTene").disabled = false
        document.getElementById("inputEquipUpgradeBottomTene").disabled = false
        document.getElementById("inputEquipUpgradeGloveTene").disabled = false
        document.getElementById("inputEquipUpgradeShoesTene").disabled = false

        document.getElementById("inputEquipReforgeTopTene").disabled = false
        document.getElementById("inputEquipReforgeBottomTene").disabled = false
        document.getElementById("inputEquipReforgeGloveTene").disabled = false
        document.getElementById("inputEquipReforgeShoesTene").disabled = false
    }
}

function appendEquip(input_data, default_enable) {
    var idNumber = (document.getElementById("combiEquipTable").rows.length - 1).toString()
    
    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute("id", "combiEquipTr_" + idNumber)
    tempChild.setAttribute("class", "text-center")
    document.getElementById("combiEquipList").appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdEnable_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipEnable_" + idNumber)
    tempChild.setAttribute("class", "form-check-input")
    tempChild.setAttribute("type", "checkbox")
    if (default_enable) {
        tempChild.setAttribute("checked", "checked")
    }
    document.getElementById("combiEquipTdEnable_" + idNumber).appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdName_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdName_" + idNumber).appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdPart_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipPart_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdPart_" + idNumber).appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdSetName_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdSetName_" + idNumber).appendChild(tempChild)

    // ????????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdSkillDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipSkillDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdSkillDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdAtkPower_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipAtkPower_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdAtkPower_" + idNumber).appendChild(tempChild)

    // ????????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdCritDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipCritDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdCritDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdPolar_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipPolar_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdPolar_" + idNumber).appendChild(tempChild)

    // Boss ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdBossDmg_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipBossDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdBossDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiEquipTdAdapt_" + idNumber)
    document.getElementById("combiEquipTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiEquipAdapt_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiEquipTdAdapt_" + idNumber).appendChild(tempChild)
    
    if (input_data == false) {
        document.getElementById("combiEquipName_" + idNumber).value = "???????????? " + idNumber
        document.getElementById("combiEquipPart_" + idNumber).value = ""
        document.getElementById("combiEquipSetName_" + idNumber).value = ""
        document.getElementById("combiEquipSkillDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipAtkPower_" + idNumber).value = "0"
        document.getElementById("combiEquipCritDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipPolar_" + idNumber).value = "0"
        document.getElementById("combiEquipBossDmg_" + idNumber).value = "0"
        document.getElementById("combiEquipAdapt_" + idNumber).value = "0"
    } else {
        document.getElementById("combiEquipName_" + idNumber).value = input_data[0]
        document.getElementById("combiEquipPart_" + idNumber).value = input_data[1]
        document.getElementById("combiEquipSetName_" + idNumber).value = input_data[2]
        document.getElementById("combiEquipSkillDmg_" + idNumber).value = input_data[3]
        document.getElementById("combiEquipAtkPower_" + idNumber).value = input_data[4]
        document.getElementById("combiEquipCritDmg_" + idNumber).value = input_data[5]
        document.getElementById("combiEquipPolar_" + idNumber).value = input_data[6]
        document.getElementById("combiEquipBossDmg_" + idNumber).value = input_data[7]
        document.getElementById("combiEquipAdapt_" + idNumber).value = input_data[8]
    }
}

function appendSet(input_data) {
    var idNumber = (document.getElementById("combiSetTable").rows.length - 1).toString()
    
    // tr
    var tempChild = document.createElement('tr')
    tempChild.setAttribute("id", "combiSetTr_" + idNumber)
    tempChild.setAttribute("class", "text-center")
    document.getElementById("combiSetList").appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdName_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdName_" + idNumber).appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSetName_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSetName_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSetName_" + idNumber).appendChild(tempChild)

    // ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSetRequire_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSetRequire_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSetRequire_" + idNumber).appendChild(tempChild)

    // ????????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdSkillDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetSkillDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdSkillDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdAtkPower_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetAtkPower_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdAtkPower_" + idNumber).appendChild(tempChild)

    // ????????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdCritDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetCritDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdCritDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdPolar_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetPolar_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdPolar_" + idNumber).appendChild(tempChild)

    // Boss ??????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdBossDmg_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetBossDmg_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdBossDmg_" + idNumber).appendChild(tempChild)

    // ?????????
    tempChild = document.createElement('td')
    tempChild.setAttribute("id", "combiSetTdAdapt_" + idNumber)
    document.getElementById("combiSetTr_" + idNumber).appendChild(tempChild)

    tempChild = document.createElement('input')
    tempChild.setAttribute("id", "combiSetAdapt_" + idNumber)
    tempChild.setAttribute("class", "form-control")
    document.getElementById("combiSetTdAdapt_" + idNumber).appendChild(tempChild)
    
    if (input_data == false) {
        document.getElementById("combiSetName_" + idNumber).value = "???????????? " + idNumber
        document.getElementById("combiSetSetName_" + idNumber).value = ""
        document.getElementById("combiSetSetRequire_" + idNumber).value = "2"
        document.getElementById("combiSetSkillDmg_" + idNumber).value = "0"
        document.getElementById("combiSetAtkPower_" + idNumber).value = "0"
        document.getElementById("combiSetCritDmg_" + idNumber).value = "0"
        document.getElementById("combiSetPolar_" + idNumber).value = "0"
        document.getElementById("combiSetBossDmg_" + idNumber).value = "0"
        document.getElementById("combiSetAdapt_" + idNumber).value = "0"
    } else {
        document.getElementById("combiSetName_" + idNumber).value = input_data[0]
        document.getElementById("combiSetSetName_" + idNumber).value = input_data[1]
        document.getElementById("combiSetSetRequire_" + idNumber).value = input_data[2]
        document.getElementById("combiSetSkillDmg_" + idNumber).value = input_data[3]
        document.getElementById("combiSetAtkPower_" + idNumber).value = input_data[4]
        document.getElementById("combiSetCritDmg_" + idNumber).value = input_data[5]
        document.getElementById("combiSetPolar_" + idNumber).value = input_data[6]
        document.getElementById("combiSetBossDmg_" + idNumber).value = input_data[7]
        document.getElementById("combiSetAdapt_" + idNumber).value = input_data[8]
    }
}

// Calc
function submitCalc() {
    if (inputCheck()) {
        saveCookie()

        calcNote = document.getElementById("calcNote")
        calcNote.value = ""

        // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
        var charInfo = [0, 0, 0, 0, 0, 0, 0]
        charInfo = updateByJob(charInfo)
        charInfo = updateByWeapon(charInfo)
        charInfo = updateByOther(charInfo)
        charInfo = updateByPersonal(charInfo)
        charInfo = updateByEquip(charInfo)
        charInfo = updateByFixedEffect(charInfo)

        if (document.getElementById("inputEquipRadioBoth").checked) {
            calcNote.value += "# ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n????????????????????????????????????????????????????????????????????????????????????\n"
        } else {
            calcNote.value += "# ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????\n"
        }
        calcNote.value += "- ????????????: ?????????????????????????????????????????????????????????????????????????????????????????????????????????\n"
        calcNote.value += "- ????????????: ????????? + " + charInfo[0] + "%??????????????? + " + charInfo[1] + "%???Boss ?????? + " + charInfo[2] + "%????????????????????? + " + charInfo[3] + "%????????????????????? + " + charInfo[4] + "%???????????? + " + charInfo[5] + "%???????????? + " + charInfo[6] + "%\n\n"

        calcNote.value += "# ?????????????????? ... ...\n"
        var equipDetail = readEquipInfo()
        var combiCount = 1
        equipDetail.forEach(function(part) {
            combiCount *= part.length
        });
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[0].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[1].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[2].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[10].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[3].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[4].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[5].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[6].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[7].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ?????? ] ?????? [ " + equipDetail[8].length + " ] ?????????\n"
        calcNote.value += "- ?????? [ ???????????? ] ?????? [ " + equipDetail[9].length + " ] ?????????\n"
        calcNote.value += "# ???????????? [ " + int_formatter.format(combiCount) + " ] ????????????\n\n"

        var setDetail = readSetInfo()
        calcNote.value += "# ?????????????????? ... ...\n"
        calcNote.value += "# ?????? [ " + int_formatter.format(setDetail.length) + " ] ????????????????????????\n\n"

        calcNote.value += "# ???????????? ... ...\n"
        executeCalc(calcNote, charInfo, equipDetail, setDetail)
        calcNote.value += "# ???????????????\n"

    } else {
        alert("?????????????????????????????????????????????????????????????????????????????????????????????")
    }
}

function inputCheck() {
    var cancelFlag = true
    var checkTargetList = [
        // ????????????
        'inputJobAtkPower', 'inputJobCritDmg', 'inputJobBossDmg', 'inputJobSkillDmg', 'inputJobAllSkillDmg',
        // ????????????
        'inputWeaponUpgrade', 'inputWeaponAtkPower', 'inputWeaponCritDmg',
        // ????????????
        'inputEquipUpgradeTopAmet', 'inputEquipReforgeTopAmet', 'inputEquipUpgradeBottomAmet', 'inputEquipReforgeBottomAmet', 'inputEquipUpgradeGloveAmet', 'inputEquipReforgeGloveAmet', 'inputEquipUpgradeShoesAmet', 'inputEquipReforgeShoesAmet', 
        'inputEquipUpgradeTopTene', 'inputEquipReforgeTopTene', 'inputEquipUpgradeBottomTene', 'inputEquipReforgeBottomTene', 'inputEquipUpgradeGloveTene', 'inputEquipReforgeGloveTene', 'inputEquipUpgradeShoesTene', 'inputEquipReforgeShoesTene',  
        // ???????????? 'inputOtherSkillDmg'
        'inputOtherBossDmgStone', 'inputOtherDeBuff', 'inputOtherReson',
        // ????????????
        'inputPerPolar', 'inputPerAtkPower', 'inputPerCritDmg', 'inputPerBossDmg', 'inputPerSkillDmg', 'inputPerAllSkillDmg', 'inputPerAdapt',
    ]
    checkTargetList.forEach(function(item) {
        if (isNaN(document.getElementById(item).value)) {
            cancelFlag = false
        }
    })
    return cancelFlag
}

function updateByJob(inputInfo) {
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
    inputInfo[0] += parseFloat(document.getElementById("inputJobAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputJobCritDmg").value)
    inputInfo[2] += parseFloat(document.getElementById("inputJobBossDmg").value)
    inputInfo[3] += parseFloat(document.getElementById("inputJobSkillDmg").value)
    inputInfo[4] += parseFloat(document.getElementById("inputJobAllSkillDmg").value)

    return inputInfo
}

function updateByWeapon(inputInfo) {
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
    var weaponType = document.getElementById("inputWeaponType").value
    var weaponUpgrade = parseInt(document.getElementById("inputWeaponUpgrade").value)
    var weaponStage = parseInt(document.getElementById("inputWeaponStage").value)

    if (weaponType == "FOJ") {
        inputInfo[6] += 5

        if (weaponUpgrade >= 10) {
            inputInfo[4] += 10
        }
    } 
    else if (weaponType == "VOS") {
        inputInfo[6] += 5

        if (weaponUpgrade >= 10) {
            inputInfo[0] += 10
        }
        if (weaponUpgrade >= 12) {
            inputInfo[5] += 7
        }
        if (weaponUpgrade >= 13) {
            inputInfo[1] += 10
        }

        if (weaponStage >= 5) {
            inputInfo[4] += 10
        }
    }
    
    inputInfo[0] += parseFloat(document.getElementById("inputWeaponAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputWeaponCritDmg").value)

    return inputInfo
}

function updateByOther(inputInfo) {
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
    inputInfo[2] += parseFloat(document.getElementById("inputOtherBossDmgStone").value) * 2.5
    // inputInfo[3] += parseFloat(document.getElementById("inputOtherSkillDmg").value)

    return inputInfo
}

function updateByPersonal(inputInfo) {
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
    inputInfo[0] += parseFloat(document.getElementById("inputPerAtkPower").value)
    inputInfo[1] += parseFloat(document.getElementById("inputPerCritDmg").value)
    inputInfo[2] += parseFloat(document.getElementById("inputPerBossDmg").value)
    inputInfo[3] += parseFloat(document.getElementById("inputPerSkillDmg").value)
    inputInfo[4] += parseFloat(document.getElementById("inputPerAllSkillDmg").value)
    inputInfo[5] += parseFloat(document.getElementById("inputPerPolar").value)
    inputInfo[6] += parseFloat(document.getElementById("inputPerAdapt").value)

    return inputInfo
}

function updateByEquip(inputInfo) {
    // Amet
    if (document.getElementById("inputEquipRadioAmet").checked) {
        // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            inputInfo[6] += 2
            if (part == "Glove") {
                inputInfo[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                inputInfo[2] += 3
            }
            if (upgradeLv >= 11) {
                inputInfo[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 6) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 9) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 12) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 15) {
                inputInfo[6] += 1
            }
            if (reforgeLv >= 18) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 21) {
                inputInfo[0] += 3
            }

        });

        if (document.getElementById("checkBoxAmetType").checked) {
            inputInfo[5] += 20
        }

    }
    // Tene
    else if (document.getElementById("inputEquipRadioTene").checked) {
        // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            inputInfo[4] += 1.5
            inputInfo[6] += 2
            if (part == "Glove") {
                inputInfo[3] += 10
                inputInfo[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                inputInfo[2] += 5
            }
            if (upgradeLv >= 11) {
                inputInfo[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 6) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 9) {
                inputInfo[1] += 3
            }
            if (reforgeLv >= 12) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 15) {
                inputInfo[0] += 2
            }
            if (reforgeLv >= 18) {
                inputInfo[3] += 5
            }
            if (reforgeLv >= 21) {
                inputInfo[6] += 2
            }

        });
    }

    return inputInfo
}

function updateByFixedEffect(inputInfo) {
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????

    // ???????????????
    inputInfo[4] += 10

    // ???????????? or ???????????????
    inputInfo[6] += 2

    // ??????????????????
    inputInfo[0] += 1
    inputInfo[3] += 20

    // ????????????
    inputInfo[0] -= 24
    inputInfo[2] += 80

    // ??????
    inputInfo[0] += 3
    inputInfo[1] += 18
    inputInfo[2] += 15
    inputInfo[3] += 5

    // ?????????
    inputInfo[0] += 3.75
    inputInfo[1] += 1.5
    inputInfo[2] += 5
    inputInfo[3] += 3
    inputInfo[5] += 1.2
    inputInfo[6] += 1

    return inputInfo
}

function readEquipInfo() {
    var idNumber = (document.getElementById("combiEquipTable").rows.length - 1)
    var tempArray = [[], [], [], [], [], [], [], [], [], [], []]

    for (i = 0 ; i < idNumber ; i++) {
        var part = document.getElementById("combiEquipPart_" + i).value
        var enable = document.getElementById("combiEquipEnable_" + i).checked

        if (enable) {
            if (part == "??????") {
                tempArray[0].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[1].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[2].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[3].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[4].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[5].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[6].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[7].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[8].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "????????????") {
                tempArray[9].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            } else if (part == "??????") {
                tempArray[10].push(
                    [
                        document.getElementById("combiEquipName_" + i).value,
                        document.getElementById("combiEquipPart_" + i).value,
                        document.getElementById("combiEquipSetName_" + i).value,
                        parseFloat(document.getElementById("combiEquipSkillDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAtkPower_" + i).value),
                        parseFloat(document.getElementById("combiEquipCritDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipPolar_" + i).value),
                        parseFloat(document.getElementById("combiEquipBossDmg_" + i).value),
                        parseFloat(document.getElementById("combiEquipAdapt_" + i).value)
                    ]
                )
            }
        }
    }

    return tempArray
}

function readSetInfo() {
    var idNumber = (document.getElementById("combiSetTable").rows.length - 1)
    var tempArray = []

    for (i = 0 ; i < idNumber ; i++) {
        tempArray.push(
            [
                document.getElementById("combiSetName_" + i).value,
                document.getElementById("combiSetSetName_" + i).value,
                parseInt(document.getElementById("combiSetSetRequire_" + i).value),
                parseFloat(document.getElementById("combiSetSkillDmg_" + i).value),
                parseFloat(document.getElementById("combiSetAtkPower_" + i).value),
                parseFloat(document.getElementById("combiSetCritDmg_" + i).value),
                parseFloat(document.getElementById("combiSetPolar_" + i).value),
                parseFloat(document.getElementById("combiSetBossDmg_" + i).value),
                parseFloat(document.getElementById("combiSetAdapt_" + i).value)
            ]
        )
    }

    return tempArray
}

function executeCalc(noteArea, charDetail, equipDetail, setDetail) {


    var needCoolDown = document.getElementById("checkBoxCooldown").checked
    var maxPolar = 45
    var maxAdapt = 45
    if (document.getElementById("checkBoxVer55").checked) {
        maxPolar = 55
        maxAdapt = 55
    }
    var deBuff = document.getElementById("inputOtherDeBuff").value
    var resonLv = document.getElementById("inputOtherReson").value

    var avatarLeft = equipDetail[0]
    var avatarWeapon = equipDetail[1]
    var accSupport = equipDetail[2]
    var accFaceTop = equipDetail[10]
    var accFaceMiddle = equipDetail[3]
    var accTop = equipDetail[4]
    var accBottom = equipDetail[5]
    var accHand = equipDetail[6]
    var accEarRing = equipDetail[7]
    var accNecklace = equipDetail[8]
    var artRing = equipDetail[9]
    
    var calcType = document.getElementById("inputEquipRadioBoth").checked
    
    var bestAnswer = [0]
    
    // Both Calc
    if (calcType) {
        var equipTypeList = ["??????", "??????", "??????"]

        avatarLeft.forEach(function(ava_left) {
            avatarWeapon.forEach(function(ava_wp) {
                accSupport.forEach(function(acc_sup) {
                    accFaceTop.forEach(function(acc_face_top) {
                        accFaceMiddle.forEach(function(acc_face_mid) {
                            accTop.forEach(function(acc_top) {
                                accBottom.forEach(function(acc_btm) {
                                    accHand.forEach(function(acc_hand) {
                                        accEarRing.forEach(function(acc_ear_ring) {
                                            accNecklace.forEach(function(acc_neck) {
                                                artRing.forEach(function(art_ring) {
                                                    equipTypeList.forEach(function(equipType) {
    
                                                        if (needCoolDown) {
                                                            if ((ava_left[0] == "?????????") || (acc_top[0] == "????????????") || (acc_top[0] == "????????????")) {
                                                                bestAnswer = combiCalcBoth(
                                                                    equipType,
                                                                    charDetail.slice(),
                                                                    [
                                                                        ava_left,
                                                                        ava_wp,
                                                                        acc_sup,
                                                                        acc_face_top,
                                                                        acc_face_mid,
                                                                        acc_top,
                                                                        acc_btm,
                                                                        acc_hand,
                                                                        acc_ear_ring,
                                                                        acc_neck,
                                                                        art_ring
                                                                    ],
                                                                    setDetail,
                                                                    maxPolar,
                                                                    maxAdapt,
                                                                    deBuff,
                                                                    resonLv,
                                                                    bestAnswer
                                                                )
                                                            }
                                                        }
        
                                                        else {
                                                            bestAnswer = combiCalcBoth(
                                                                equipType,
                                                                charDetail.slice(),
                                                                [
                                                                    ava_left,
                                                                    ava_wp,
                                                                    acc_sup,
                                                                    acc_face_top,
                                                                    acc_face_mid,
                                                                    acc_top,
                                                                    acc_btm,
                                                                    acc_hand,
                                                                    acc_ear_ring,
                                                                    acc_neck,
                                                                    art_ring
                                                                ],
                                                                setDetail,
                                                                maxPolar,
                                                                maxAdapt,
                                                                deBuff,
                                                                resonLv,
                                                                bestAnswer
                                                            )
                                                        }
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    } 
    // Normal Calc
    else {
        var equipType = ""
        if (document.getElementById("inputEquipRadioAmet").checked) {
            equipType = "??????????????????"
            if (document.getElementById("checkBoxAmetType").checked) {
                equipType += " - ??????"
            } else {
                equipType += " - ?????????"
            }
        } else {
            equipType = "?????????????????????"
            if (document.getElementById("checkBoxTeneType").checked) {
                equipType += " - ????????????/?????????????????????"
            } else {
                equipType += " - ?????????"
            }
        }

        avatarLeft.forEach(function(ava_left) {
            avatarWeapon.forEach(function(ava_wp) {
                accSupport.forEach(function(acc_sup) {
                    accFaceTop.forEach(function(acc_face_top) {
                        accFaceMiddle.forEach(function(acc_face_mid) {
                            accTop.forEach(function(acc_top) {
                                accBottom.forEach(function(acc_btm) {
                                    accHand.forEach(function(acc_hand) {
                                        accEarRing.forEach(function(acc_ear_ring) {
                                            accNecklace.forEach(function(acc_neck) {
                                                artRing.forEach(function(art_ring) {
    
                                                    if (needCoolDown) {
                                                        if ((ava_left[0] == "?????????") || (acc_top[0] == "????????????")) {
                                                            bestAnswer = combiCalc(
                                                                equipType,
                                                                charDetail.slice(),
                                                                [
                                                                    ava_left,
                                                                    ava_wp,
                                                                    acc_sup,
                                                                    acc_face_top,
                                                                    acc_face_mid,
                                                                    acc_top,
                                                                    acc_btm,
                                                                    acc_hand,
                                                                    acc_ear_ring,
                                                                    acc_neck,
                                                                    art_ring
                                                                ],
                                                                setDetail,
                                                                maxPolar,
                                                                maxAdapt,
                                                                deBuff,
                                                                resonLv,
                                                                bestAnswer
                                                            )
                                                        }
                                                    }
    
                                                    else {
                                                        bestAnswer = combiCalc(
                                                            equipType,
                                                            charDetail.slice(),
                                                            [
                                                                ava_left,
                                                                ava_wp,
                                                                acc_sup,
                                                                acc_face_top,
                                                                acc_face_mid,
                                                                acc_top,
                                                                acc_btm,
                                                                acc_hand,
                                                                acc_ear_ring,
                                                                acc_neck,
                                                                art_ring
                                                            ],
                                                            setDetail,
                                                            maxPolar,
                                                            maxAdapt,
                                                            deBuff,
                                                            resonLv,
                                                            bestAnswer
                                                        )
                                                    }
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    // Display
    // 0 ????????? + %, 1 ????????????, 2 Boss ??????, 3 ??????????????????, 4 ??????????????????, 5 ?????????, 6 ?????????
    document.getElementById("resultValue").innerHTML = int_formatter.format(roundTo(bestAnswer[0], 2))

    document.getElementById("resultAtkPower").innerHTML = bestAnswer[1]
    document.getElementById("resultCritDmg").innerHTML = bestAnswer[2]
    document.getElementById("resultBossDmg").innerHTML = bestAnswer[3]
    document.getElementById("resultSkillDmg").innerHTML = bestAnswer[4]
    document.getElementById("resultAllSkillDmg").innerHTML = bestAnswer[5]
    document.getElementById("resultPolar").innerHTML = bestAnswer[6]
    document.getElementById("resultAdapt").innerHTML = bestAnswer[7]

    document.getElementById("resultResonPolar").innerHTML = bestAnswer[8]
    document.getElementById("resultResonBossDmg").innerHTML = bestAnswer[9]
    document.getElementById("resultResonAdapt").innerHTML = bestAnswer[10]

    document.getElementById("resultCombiEquip").innerHTML = bestAnswer[11]
    document.getElementById("resultCombiAvaLeft").innerHTML = bestAnswer[12]
    document.getElementById("resultCombiAvaWeapon").innerHTML = bestAnswer[13]
    document.getElementById("resultCombiAccSup").innerHTML = bestAnswer[14]
    document.getElementById("resultCombiAccFaceTop").innerHTML = bestAnswer[15]
    document.getElementById("resultCombiAccFaceMid").innerHTML = bestAnswer[16]
    document.getElementById("resultCombiAccTop").innerHTML = bestAnswer[17]
    document.getElementById("resultCombiAccBtm").innerHTML = bestAnswer[18]
    document.getElementById("resultCombiAccHand").innerHTML = bestAnswer[19]
    document.getElementById("resultCombiAccEarRing").innerHTML = bestAnswer[20]
    document.getElementById("resultCombiAccNeck").innerHTML = bestAnswer[21]
    document.getElementById("resultCombiArtRing").innerHTML = bestAnswer[22]

    noteArea.value += "- ????????????: " + bestAnswer + "\n"
}

function combiCalc(equipType, charDetail, equipDetail, setDetail, maxPolar, maxAdapt, deBuff, resonLv, bestAnswer) {
    // Equip
    var useSetList = []
    equipDetail.forEach(function(equip) {
        if (equip[2] != "") {
            useSetList.push(equip[2])
        }

        charDetail[4] += equip[3]
        charDetail[0] += equip[4]
        charDetail[1] += equip[5]
        charDetail[5] += equip[6]
        charDetail[2] += equip[7]
        charDetail[6] += equip[8]
    });

    // Set
    setDetail.forEach(function(set) {
        if (getOccurrence(useSetList, set[1]) >= set[2]) {
            charDetail[4] += set[3]
            charDetail[0] += set[4]
            charDetail[1] += set[5]
            charDetail[5] += set[6]
            charDetail[2] += set[7]
            charDetail[6] += set[8]
        }
    });

    // Reson
    if (resonLv > 0) {
        tempLv = Math.min(resonLv, 100)
        resonLv -= tempLv
        charDetail[3] += tempLv * 0.35
    }

    var adaptLv = 0
    if (resonLv > 0) {
        adaptLv = Math.min(resonLv, Math.max(0, roundTo((maxAdapt - charDetail[6]) / 0.07, 0)), 100)
        resonLv -= adaptLv
        charDetail[6] += adaptLv * 0.07
    }

    var polarLv = 0
    if (resonLv > 0) {
        polarLv = Math.min(resonLv, Math.max(0, roundTo((maxPolar - charDetail[5]) / 0.15, 0)), 50)
        resonLv -= polarLv
        charDetail[5] += polarLv * 0.15
    }

    var bossDmgLv = 0
    if (resonLv > 0) {
        bossDmgLv = Math.min(resonLv, 50)
        resonLv -= bossDmgLv
        charDetail[2] += bossDmgLv * 0.3
    }

    // Result
    var resultValue = 100.0
    if (equipDetail[3][0] == "122??????") {
        resultValue *= 1.1
    } else if (equipDetail[3][0] == "156??????") {
        resultValue *= 1.05
    }
    resultValue *= (100 + charDetail[0]) / 100 * (150 + charDetail[1]) / 100 * (100 + charDetail[2]) / 100 * (100 + charDetail[3]) / 100 * (100 + charDetail[4]) / 100
    resultValue *= (100 + Math.min(maxPolar, charDetail[5])) / 100
    resultValue *= (100 - deBuff + Math.min(maxAdapt, charDetail[6])) / 100

    if (equipType == "????????????????????? - ????????????/?????????????????????") {
        resultValue *= 1.1 * 1.064
    } else if (equipType == "????????????????????? - ?????????") {
        resultValue *= 1.064
    }
    
    if (resultValue > bestAnswer[0]) {
        var resultList = [resultValue]

        charDetail.forEach(function(status) {
            resultList.push(status)
        });

        resultList.push(polarLv)
        resultList.push(bossDmgLv)
        resultList.push(adaptLv)

        resultList.push(equipType)
        equipDetail.forEach(function(equip) {
            resultList.push(equip[0])
        });

        return resultList
    } else {
        return bestAnswer
    }
}

function combiCalcBoth(equipType, charDetail, equipDetail, setDetail, maxPolar, maxAdapt, deBuff, resonLv, bestAnswer) {
    var resultValue = 100
    if (equipType == "??????") {
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 3
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[6] += 1
            }
            if (reforgeLv >= 18) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 21) {
                charDetail[0] += 3
            }
        });

        if (document.getElementById("checkBoxAmetType").checked) {
            charDetail[5] += 20
        }
    }
    else if (equipType == "??????") {
        // ??????
        ["Bottom", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Amet").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Amet").value

            // Basic
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 3
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[6] += 1
            }
            if (reforgeLv >= 18) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 21) {
                charDetail[0] += 3
            }
        });

        if (document.getElementById("checkBoxAmetType").checked) {
            charDetail[5] += 7
        }

        // ??????
        ["Top", "Glove"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            charDetail[4] += 1.5
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[3] += 10
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 5
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[0] += 2
            }
            if (reforgeLv >= 18) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 21) {
                charDetail[6] += 2
            }
        });

        if (document.getElementById("checkBoxTeneType").checked) {
            resultValue *= 1.1
        }
        resultValue *= 1.016
    }
    else {
        ["Top", "Bottom", "Glove", "Shoes"].forEach(function(part) {
            upgradeLv = document.getElementById("inputEquipUpgrade" + part + "Tene").value
            reforgeLv = document.getElementById("inputEquipReforge" + part + "Tene").value

            // Basic
            charDetail[4] += 1.5
            charDetail[6] += 2
            if (part == "Glove") {
                charDetail[3] += 10
                charDetail[4] += (upgradeLv * 5)
            }

            // Upgrade
            if (upgradeLv >= 10) {
                charDetail[2] += 5
            }
            if (upgradeLv >= 11) {
                charDetail[6] += 1
            }

            // Reforge
            if (reforgeLv >= 3) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 6) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 9) {
                charDetail[1] += 3
            }
            if (reforgeLv >= 12) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 15) {
                charDetail[0] += 2
            }
            if (reforgeLv >= 18) {
                charDetail[3] += 5
            }
            if (reforgeLv >= 21) {
                charDetail[6] += 2
            }
        });

        if (document.getElementById("checkBoxTeneType").checked) {
            resultValue *= 1.1
        }
        resultValue *= 1.064
    }

    // Equip
    var useSetList = []
    equipDetail.forEach(function(equip) {
        if (equip[2] != "") {
            useSetList.push(equip[2])
        }

        charDetail[4] += equip[3]
        charDetail[0] += equip[4]
        charDetail[1] += equip[5]
        charDetail[5] += equip[6]
        charDetail[2] += equip[7]
        charDetail[6] += equip[8]
    });

    // Set
    setDetail.forEach(function(set) {
        if (getOccurrence(useSetList, set[1]) >= set[2]) {
            charDetail[4] += set[3]
            charDetail[0] += set[4]
            charDetail[1] += set[5]
            charDetail[5] += set[6]
            charDetail[2] += set[7]
            charDetail[6] += set[8]
        }
    });

    // Reson
    if (resonLv > 0) {
        tempLv = Math.min(resonLv, 100)
        resonLv -= tempLv
        charDetail[3] += tempLv * 0.35
    }

    var adaptLv = 0
    if (resonLv > 0) {
        adaptLv = Math.min(resonLv, Math.max(0, roundTo((maxAdapt - charDetail[6]) / 0.07, 0)), 100)
        resonLv -= adaptLv
        charDetail[6] += adaptLv * 0.07
    }

    var polarLv = 0
    if (resonLv > 0) {
        polarLv = Math.min(resonLv, Math.max(0, roundTo((maxPolar - charDetail[5]) / 0.15, 0)), 50)
        resonLv -= polarLv
        charDetail[5] += polarLv * 0.15
    }

    var bossDmgLv = 0
    if (resonLv > 0) {
        bossDmgLv = Math.min(resonLv, 50)
        resonLv -= bossDmgLv
        charDetail[2] += bossDmgLv * 0.3
    }

    // Result
    resultValue *= (100 + charDetail[0]) / 100 * (150 + charDetail[1]) / 100 * (100 + charDetail[2]) / 100 * (100 + charDetail[3]) / 100 * (100 + charDetail[4]) / 100
    resultValue *= (100 + Math.min(maxPolar, charDetail[5])) / 100
    resultValue *= (100 - deBuff + Math.min(maxAdapt, charDetail[6])) / 100
    
    if (resultValue > bestAnswer[0]) {
        var resultList = [resultValue]

        charDetail.forEach(function(status) {
            resultList.push(status)
        });

        resultList.push(polarLv)
        resultList.push(bossDmgLv)
        resultList.push(adaptLv)

        resultList.push(equipType)
        equipDetail.forEach(function(equip) {
            resultList.push(equip[0])
        });

        return resultList
    } else {
        return bestAnswer
    }
}
