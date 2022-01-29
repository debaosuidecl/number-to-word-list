const Prediction = require("../classes/prediction.class");

//integration
describe("should correctly predict numerical input to words", () => {

    it("should make 23  return list [ad, ae, af, bd, be, bf, cd, ce, cf]", () => {
        const prediction = new Prediction("23")
        expect(prediction.predict().data).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })

    it('should make 89 return list ["tw", "tx", "ty", "tz", "uw", "ux", "uy","uz", "vw","vx","vy","vz"]', () => {
        const prediction = new Prediction("89")
        expect(prediction.predict().data).toEqual(["tw", "tx", "ty", "tz", "uw", "ux", "uy", "uz", "vw", "vx", "vy", "vz"])
    })

    it("should return error for non integer enteries", () => {
        const prediction = new Prediction("eb425jdf")
        expect(prediction.predict()).toEqual(expect.objectContaining({
            error: true
        }))
    })
    it("5 word predictions", () => {
        const prediction = new Prediction("83233")
        expect(prediction.predict().data).toEqual(["tdadd", "tdade", "tdadf", "tdaed", "tdaee", "tdaef", "tdafd", "tdafe", "tdaff", "tdbdd", "tdbde", "tdbdf", "tdbed", "tdbee", "tdbef", "tdbfd", "tdbfe", "tdbff", "tdcdd", "tdcde", "tdcdf", "tdced", "tdcee", "tdcef", "tdcfd", "tdcfe", "tdcff", "teadd", "teade", "teadf", "teaed", "teaee", "teaef", "teafd", "teafe", "teaff", "tebdd", "tebde", "tebdf", "tebed", "tebee", "tebef", "tebfd", "tebfe", "tebff", "tecdd", "tecde", "tecdf", "teced", "tecee", "tecef", "tecfd", "tecfe", "tecff", "tfadd", "tfade", "tfadf", "tfaed", "tfaee", "tfaef", "tfafd", "tfafe", "tfaff", "tfbdd", "tfbde", "tfbdf", "tfbed", "tfbee", "tfbef", "tfbfd", "tfbfe", "tfbff", "tfcdd", "tfcde", "tfcdf", "tfced", "tfcee", "tfcef", "tfcfd", "tfcfe", "tfcff", "udadd", "udade", "udadf", "udaed", "udaee", "udaef", "udafd", "udafe", "udaff", "udbdd", "udbde", "udbdf", "udbed", "udbee", "udbef", "udbfd", "udbfe", "udbff", "udcdd", "udcde", "udcdf", "udced", "udcee", "udcef", "udcfd", "udcfe", "udcff", "ueadd", "ueade", "ueadf", "ueaed", "ueaee", "ueaef", "ueafd", "ueafe", "ueaff", "uebdd", "uebde", "uebdf", "uebed", "uebee", "uebef", "uebfd", "uebfe", "uebff", "uecdd", "uecde", "uecdf", "ueced", "uecee", "uecef", "uecfd", "uecfe", "uecff", "ufadd", "ufade", "ufadf", "ufaed", "ufaee", "ufaef", "ufafd", "ufafe", "ufaff", "ufbdd", "ufbde", "ufbdf", "ufbed", "ufbee", "ufbef", "ufbfd", "ufbfe", "ufbff", "ufcdd", "ufcde", "ufcdf", "ufced", "ufcee", "ufcef", "ufcfd", "ufcfe", "ufcff", "vdadd", "vdade", "vdadf", "vdaed", "vdaee", "vdaef", "vdafd", "vdafe", "vdaff", "vdbdd", "vdbde", "vdbdf", "vdbed", "vdbee", "vdbef", "vdbfd", "vdbfe", "vdbff", "vdcdd", "vdcde", "vdcdf", "vdced", "vdcee", "vdcef", "vdcfd", "vdcfe", "vdcff", "veadd", "veade", "veadf", "veaed", "veaee", "veaef", "veafd", "veafe", "veaff", "vebdd", "vebde", "vebdf", "vebed", "vebee", "vebef", "vebfd", "vebfe", "vebff", "vecdd", "vecde", "vecdf", "veced", "vecee", "vecef", "vecfd", "vecfe", "vecff", "vfadd", "vfade", "vfadf", "vfaed", "vfaee", "vfaef", "vfafd", "vfafe", "vfaff", "vfbdd", "vfbde", "vfbdf", "vfbed", "vfbee", "vfbef", "vfbfd", "vfbfe", "vfbff", "vfcdd", "vfcde", "vfcdf", "vfced", "vfcee", "vfcef", "vfcfd", "vfcfe", "vfcff"])
    })
})

//units
describe("Recursive Letter Order Matching with Letter Matrix", () => {


    it('should transform [["a", "b", "c"], ["d", "e", "f"]] to ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]', () => {
        const prediction = new Prediction("")
        expect(prediction.recursiveLetterMatching([["a", "b", "c"], ["d", "e", "f"]]).sort()).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
    })

})
