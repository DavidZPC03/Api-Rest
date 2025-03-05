function validationBody(body, bodyrules = []) {
    const keys = Object.keys(body);
    const rules = bodyrules.filter(formprop => !keys.includes(formprop));
    if (rules.length > 0) {
        return { message: `Faltan los siguientes campos: ${rules.join(", ")}` };
    }
    return true;
}

module.exports = validationBody;
