export default (qlik) => {
    return () => {
        window.currSheet = qlik.navigation.getCurrentSheetId().sheetId;
    }
}