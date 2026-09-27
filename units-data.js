/**
 * Joash Sam SciTools - Comprehensive Scientific Unit Engine Dictionary
 * Curated for Class 11 & 12 NCERT Physics & Chemistry Standards (SI, CGS, & FPS Systems)
 */

const scientificUnits = {
    fundamental: {
        length: {
            name: "Length (L)",
            baseUnit: "meter",
            units: {
                femtometer: { label: "Femtometer / Fermi (fm)", factor: 1e-15 },
                picometer:  { label: "Picometer (pm)",          factor: 1e-12 },
                angstrom:   { label: "Angstrom (Å)",            factor: 1e-10 },
                nanometer:  { label: "Nanometer (nm)",          factor: 1e-9  },
                micrometer: { label: "Micrometer / Micron (µm)", factor: 1e-6 },
                millimeter: { label: "Millimeter (mm)",         factor: 1e-3  },
                centimeter: { label: "Centimeter (cm) [CGS]",   factor: 1e-2  },
                meter:      { label: "Meter (m) [SI Base]",     factor: 1     },
                kilometer:  { label: "Kilometer (km)",          factor: 1e3   },
                inch:       { label: "Inch (in) [FPS]",         factor: 0.0254 },
                foot:       { label: "Foot (ft) [FPS]",         factor: 0.3048 },
                yard:       { label: "Yard (yd) [FPS]",         factor: 0.9144 },
                mile:       { label: "Mile (mi) [FPS]",         factor: 1609.344 },
                au:         { label: "Astronomical Unit (AU)",  factor: 1.495978707e11 },
                lightyear:  { label: "Light-year (ly)",         factor: 9.46073e15 },
                parsec:     { label: "Parsec (pc)",             factor: 3.08567758149e16 }
            }
        },
        mass: {
            name: "Mass (M)",
            baseUnit: "kilogram",
            units: {
                amu:       { label: "Atomic Mass Unit (u / amu)", factor: 1.66053906660e-27 },
                microgram: { label: "Microgram (µg)",             factor: 1e-9 },
                milligram: { label: "Milligram (mg)",             factor: 1e-6 },
                gram:      { label: "Gram (g) [CGS Base]",        factor: 1e-3 },
                kilogram:  { label: "Kilogram (kg) [SI Base]",    factor: 1    },
                metric_ton:{ label: "Metric Ton (t)",             factor: 1e3  },
                ounce:     { label: "Ounce (oz) [FPS]",           factor: 0.0283495 },
                pound:     { label: "Pound (lb) [FPS]",           factor: 0.45359237 },
                slug:      { label: "Slug [FPS Mass]",            factor: 14.5939 }
            }
        },
        time: {
            name: "Time (T)",
            baseUnit: "second",
            units: {
                nanosecond:  { label: "Nanosecond (ns)",  factor: 1e-9 },
                millisecond: { label: "Millisecond (ms)", factor: 1e-3 },
                second:      { label: "Second (s) [SI/CGS/FPS]", factor: 1 },
                minute:      { label: "Minute (min)",     factor: 60   },
                hour:        { label: "Hour (h)",         factor: 3600 },
                day:         { label: "Day (d)",          factor: 86400 },
                year:        { label: "Year (yr)",        factor: 31557600 }
            }
        },
        current: {
            name: "Electric Current (I)",
            baseUnit: "ampere",
            units: {
                microampere: { label: "Microampere (µA)", factor: 1e-6 },
                milliampere: { label: "Milliampere (mA)", factor: 1e-3 },
                ampere:      { label: "Ampere (A) [SI Base]", factor: 1 },
                kiloampere:  { label: "Kiloampere (kA)",  factor: 1e3  }
            }
        },
        temperature: {
            name: "Thermodynamic Temperature (Θ)",
            baseUnit: "kelvin",
            isSpecial: true,
            units: {
                kelvin:     { label: "Kelvin (K) [SI Base]" },
                celsius:    { label: "Celsius (°C)" },
                fahrenheit: { label: "Fahrenheit (°F) [FPS]" }
            }
        },
        substance: {
            name: "Amount of Substance (N)",
            baseUnit: "mole",
            units: {
                nanomole:  { label: "Nanomole (nmol)",  factor: 1e-9 },
                micromole: { label: "Micromole (µmol)", factor: 1e-6 },
                millimole: { label: "Millimole (mmol)", factor: 1e-3 },
                mole:      { label: "Mole (mol) [SI Base]", factor: 1 },
                kilomole:  { label: "Kilomole (kmol)",  factor: 1e3  }
            }
        },
        luminous: {
            name: "Luminous Intensity (J)",
            baseUnit: "candela",
            units: {
                candela: { label: "Candela (cd) [SI Base]", factor: 1 }
            }
        }
    },
    derived: {
        velocity: {
            name: "Velocity / Speed",
            baseUnit: "mps",
            units: {
                cmps: { label: "Centimeter/second (cm/s) [CGS]", factor: 0.01 },
                mps:  { label: "Meter/second (m/s) [SI]",       factor: 1    },
                kmph: { label: "Kilometer/hour (km/h)",   factor: 0.277778 },
                mph:  { label: "Mile/hour (mph) [FPS]",   factor: 0.44704 },
                knot: { label: "Knot (kn) [Nautical]",    factor: 0.514444 },
                mach: { label: "Mach (Speed of sound, ~340.3 m/s)", factor: 340.3 }
            }
        },
        acceleration: {
            name: "Acceleration (Linear & Gravity)",
            baseUnit: "mps2",
            units: {
                cmps2:   { label: "Gal / cm/s² [CGS Acceleration]", factor: 0.01 },
                mps2:    { label: "Meter/second² (m/s²) [SI]",     factor: 1    },
                g_force: { label: "G-force (g ≈ 9.80665 m/s²)",     factor: 9.80665 }
            }
        },
        force: {
            name: "Force",
            baseUnit: "newton",
            units: {
                dyne:    { label: "Dyne (dyn) [CGS Force]",  factor: 1e-5 },
                newton:  { label: "Newton (N) [SI Force]",   factor: 1    },
                poundal: { label: "Poundal (pdl) [FPS Force]", factor: 0.138255 },
                lbf:     { label: "Pound-force (lbf)",       factor: 4.44822 }
            }
        },
        pressure: {
            name: "Pressure / Stress",
            baseUnit: "pascal",
            units: {
                barye:  { label: "Barye (ba) [CGS Pressure]", factor: 0.1 },
                pascal: { label: "Pascal (Pa = N/m²) [SI]",  factor: 1    },
                kPa:    { label: "Kilopascal (kPa)",         factor: 1e3  },
                bar:    { label: "Bar",                      factor: 1e5  },
                atm:    { label: "Atmosphere (atm)",         factor: 101325 },
                torr:   { label: "Torr / mmHg",              factor: 133.322 },
                psi:    { label: "PSI (lbf/in²) [FPS]",      factor: 6894.76 }
            }
        },
        modulus_elasticity: {
            name: "Elastic Moduli (Young's & Bulk Modulus)",
            baseUnit: "pascal",
            units: {
                pascal: { label: "Pascal (Pa)",      factor: 1    },
                kPa:    { label: "Kilopascal (kPa)",   factor: 1e3  },
                MPa:    { label: "Megapascal (MPa)",   factor: 1e6  },
                GPa:    { label: "Gigapascal (GPa)",   factor: 1e9  }
            }
        },
        viscosity_dynamic: {
            name: "Dynamic Viscosity (Fluid Mechanics)",
            baseUnit: "pascal_second",
            units: {
                poise:      { label: "Poise (P = g/cm·s) [CGS]", factor: 0.1 },
                centipoise: { label: "Centipoise (cP) [Lab standard]", factor: 1e-3 },
                pascal_second: { label: "Pascal-second (Pa·s) [SI]", factor: 1 }
            }
        },
        energy: {
            name: "Energy / Work / Heat",
            baseUnit: "joule",
            units: {
                erg:     { label: "Erg (erg) [CGS Energy]", factor: 1e-7 },
                ev:      { label: "electron-Volt (eV)",     factor: 1.602176634e-19 },
                joule:   { label: "Joule (J) [SI]",         factor: 1    },
                kjoule:  { label: "Kilojoule (kJ)",       factor: 1e3  },
                calorie: { label: "Calorie (cal)",        factor: 4.184 },
                kcal:    { label: "Kilocalorie (kcal)",     factor: 4184 },
                kwh:     { label: "Kilowatt-hour (kWh)",  factor: 3.6e6 }
            }
        },
        power: {
            name: "Power",
            baseUnit: "watt",
            units: {
                watt:      { label: "Watt (W) [SI]",   factor: 1    },
                kilowatt:  { label: "Kilowatt (kW)",   factor: 1e3  },
                horsepower:{ label: "Horsepower (hp) [FPS]", factor: 745.7 }
            }
        },
        voltage: {
            name: "Electric Potential (Voltage)",
            baseUnit: "volt",
            units: {
                microvolt: { label: "Microvolt (µV)", factor: 1e-6 },
                millivolt: { label: "Millivolt (mV)", factor: 1e-3 },
                volt:      { label: "Volt (V) [SI]",  factor: 1    },
                kilovolt:  { label: "Kilovolt (kV)",  factor: 1e3  }
            }
        },
        resistance: {
            name: "Electrical Resistance",
            baseUnit: "ohm",
            units: {
                milliohm: { label: "Milliohm (mΩ)", factor: 1e-3 },
                ohm:      { label: "Ohm (Ω) [SI]",  factor: 1    },
                kiloohm:  { label: "Kiloohm (kΩ)",  factor: 1e3  },
                megaohm:  { label: "Megaohm (MΩ)",  factor: 1e6  }
            }
        },
        resistivity: {
            name: "Electrical Resistivity (ρ)",
            baseUnit: "ohm_meter",
            units: {
                microohm_m: { label: "Microohm-meter (µΩ·m)", factor: 1e-8 },
                milliohm_m: { label: "Milliohm-meter (mΩ·m)", factor: 1e-3 },
                ohm_meter:  { label: "Ohm-meter (Ω·m) [SI]",  factor: 1    }
            }
        },
        conductivity: {
            name: "Electrical Conductivity (σ)",
            baseUnit: "siemens_per_meter",
            units: {
                siemens_per_meter: { label: "Siemens/meter (S/m) [SI]", factor: 1 },
                ms_per_meter:      { label: "Millisiemens/meter (mS/m)", factor: 1e-3 },
                us_per_meter:      { label: "Microsiemens/meter (µS/m)", factor: 1e-6 }
            }
        },
        conductance: {
            name: "Electrical Conductance (G)",
            baseUnit: "siemens",
            units: {
                microsiemens: { label: "Microsiemens (µS)", factor: 1e-6 },
                millisiemens: { label: "Millisiemens (mS)", factor: 1e-3 },
                siemens:      { label: "Siemens (S / mho) [SI]", factor: 1 }
            }
        },
        magnetic: {
            name: "Magnetic Induction / Flux Density",
            baseUnit: "tesla",
            units: {
                gauss: { label: "Gauss (G) [CGS Magnetic]", factor: 1e-4 },
                tesla: { label: "Tesla (T) [SI Magnetic]",  factor: 1    }
            }
        },
        dipole: {
            name: "Electric Dipole Moment",
            baseUnit: "coulomb_meter",
            units: {
                debye:         { label: "Debye (D) [Chemistry]", factor: 3.33564e-30 },
                coulomb_meter: { label: "Coulomb-meter (C·m) [SI]", factor: 1 }
            }
        }
    }
};

/**
 * Universal Superscript Formatter for Scientific Notation
 * Automatically formats results with clean HTML superscripts (e.g., 1.23 × 10⁻¹²)
 */
function formatScientificSuperscript(num, decimalPlaces = 4) {
    if (num === 0) return "0";
    if (isNaN(num)) return "";

    if (Math.abs(num) >= 0.001 && Math.abs(num) < 1e7) {
        return Number(num.toFixed(decimalPlaces)).toString();
    }

    const exponentialStr = num.toExponential(decimalPlaces);
    const parts = exponentialStr.split("e");
    const coefficient = parts[0];
    let exponent = parseInt(parts[1], 10);

    return `${coefficient} × 10<sup>${exponent}</sup>`;
}