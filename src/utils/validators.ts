export function validateEmail(email: string): string[] {
    const errors: string[] = [];

    // Check for empty email
    if (!email) {
        errors.push('Email is required');
    }

    // Check for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Email format is invalid');
    }

    return errors;
}

export function validatePasswordPresence(password: string): string[] {
    const errors: string[] = [];

    // Check for empty email
    if (!password) {
        errors.push('Password is required');
    }

    return errors;
}