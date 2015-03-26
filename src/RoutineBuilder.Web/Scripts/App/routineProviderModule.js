﻿angular.module('routineProviderModule', [])
    .factory('routineProvider', ['$http', '$q', function ($http, $q) {
        var routineDefinitions = [
            { "name": "Beyond 531", "colourCoding": [{ "exerciseName": "Deadlift", "hexCode": "#fce4d6" }, { "exerciseName": "Bench Press", "hexCode": "#fff2cc" }, { "exerciseName": "Overhead Press", "hexCode": "#d6d9fc" }], "weeks": [{ "days": [{ "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Overhead Press", "description": "Jokers", "weightFormula": null }, { "name": "Overhead Press", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }] }, { "exercises": [{ "name": "Deadlift", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Deadlift", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Deadlift", "description": "5+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Deadlift", "description": "Jokers", "weightFormula": null }, { "name": "Deadlift", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Incline Press", "description": "6x4", "weightFormula": null }] }, { "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "6x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "8x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Leg Press", "description": "3x10", "weightFormula": null }, { "name": "Pull Ups", "description": "3xfail", "weightFormula": null }] }] }, { "days": [{ "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Overhead Press", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Overhead Press", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Overhead Press", "description": "3+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.9, "additional": 0.0 } }, { "name": "Overhead Press", "description": "Jokers", "weightFormula": null }, { "name": "Overhead Press", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }] }, { "exercises": [{ "name": "Deadlift", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Deadlift", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Deadlift", "description": "3+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.9, "additional": 0.0 } }, { "name": "Deadlift", "description": "Jokers", "weightFormula": null }, { "name": "Deadlift", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "6x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "6x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "6x4", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }] }, { "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Bench Press", "description": "7x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.55, "additional": 0.0 } }, { "name": "Leg Press", "description": "3x10", "weightFormula": null }, { "name": "Pull Ups", "description": "3xfail", "weightFormula": null }] }] }, { "days": [{ "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x6", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Overhead Press", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Overhead Press", "description": "1+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.95, "additional": 0.0 } }, { "name": "Overhead Press", "description": "Jokers", "weightFormula": null }, { "name": "Overhead Press", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }] }, { "exercises": [{ "name": "Deadlift", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Deadlift", "description": "3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Deadlift", "description": "1+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.95, "additional": 0.0 } }, { "name": "Deadlift", "description": "Jokers", "weightFormula": null }, { "name": "Deadlift", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }] }, { "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x7", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Leg Press", "description": "3x10", "weightFormula": null }, { "name": "Pull Ups", "description": "3xfail", "weightFormula": null }] }] }, { "days": [{ "exercises": [{ "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.55, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Overhead Press", "description": "5+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Overhead Press", "description": "Jokers", "weightFormula": null }, { "name": "Overhead Press", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "overheadPressTrainingMax", "fraction": 0.65, "additional": 0.0 } }] }, { "exercises": [{ "name": "Deadlift", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Deadlift", "description": "5", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.75, "additional": 0.0 } }, { "name": "Deadlift", "description": "5+", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Deadlift", "description": "Jokers", "weightFormula": null }, { "name": "Deadlift", "description": "AMRAP", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "deadliftTrainingMax", "fraction": 0.65, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x3", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x4", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }] }, { "exercises": [{ "name": "Bench Press", "description": "6x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Bench Press", "description": "5x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "2x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.85, "additional": 0.0 } }, { "name": "Bench Press", "description": "3x2", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.8, "additional": 0.0 } }, { "name": "Bench Press", "description": "4x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.7, "additional": 0.0 } }, { "name": "Bench Press", "description": "6x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.6, "additional": 0.0 } }, { "name": "Bench Press", "description": "8x1", "weightFormula": { "descriminator": "VariableCoefficientConstant", "variable": "benchPressTrainingMax", "fraction": 0.5, "additional": 0.0 } }, { "name": "Leg Press", "description": "3x10", "weightFormula": null }, { "name": "Pull Ups", "description": "3xfail", "weightFormula": null }] }] }] }
        ];

        return {
            getByName: function (routineName) {
                for (var i = 0; i < routineDefinitions.length; i++)
                    if (routineDefinitions[i].name == routineName)
                        return routineDefinitions[i];

                return null;
            }
        };
    }]);