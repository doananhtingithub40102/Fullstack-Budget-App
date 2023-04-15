import categoryData from "./categoryData"

const jars = {
    necessaries: [
        { label: "Eat & Drink", value: "eat_drink_necessaries" },
        { label: "Vehicles", value: "vehicles" },
        { label: "Accommodation fee", value: "accommodationFee" },
        { label: "Sim", value: "sim" },
        { label: "Bank", value: "bank" },
        { label: "Toiletries", value: "toiletries" },
        { label: "Healthy", value: "healthy_necessaries" },
        { label: "Hair Cutting", value: "hairCutting" },
        { label: "Laundry Service", value: "laundryService" }
    ],
    freedom: [
        { label: "Fund Certificates", value: "fundCertificates" },
        { label: "Stock", value: "stock" }
    ],
    saving: [
        { label: "Saving", value: "saving" }
    ],
    education: [
        { label: "Documents", value: "documents" },
        { label: "School Supplies", value: "schoolSupplies" },
        { label: "Courses", value: "courses" }
    ],
    playing: [
        { label: "Eat & Drink", value: "eat_drink_playing" },
        { label: "Healthy", value: "healthy_playing" },
        { label: "Skin Care", value: "skinCare" },
        { label: "Entertainment", value: "entertainment" }
    ],
    giving: [
        { label: "Charity", value: "charity" }
    ]
}

function getCategories(jar) {
    let categories

    switch (jar) {
        case "necessaries":
            categories = jars.necessaries
            break;
        case "freedom":
            categories = jars.freedom
            break;
        case "saving":
            categories = jars.saving
            break;
        case "education":
            categories = jars.education
            break;
        case "playing":
            categories = jars.playing
            break;
        case "giving":
            categories = jars.giving
            break;
        case undefined:
            categories = [
                { label: "Part-time", value: "part-time" },
                { label: "Full-time", value: "full-time" },
                { label: "Bonus", value: "bonus" }
            ]
            break;

        default:
            break;
    }

    return categories
}

function getDefaultCategoryValue(jar) {
    let category

    switch (jar) {
        case "necessaries":
            category = "eat_drink_necessaries"
            break;
        case "freedom":
            category = "fundCertificates"
            break;
        case "saving":
            category = "saving"
            break;
        case "education":
            category = "documents"
            break;
        case "playing":
            category = "eat_drink_playing"
            break;
        case "giving":
            category = "charity"
            break;

        default:
            break;
    }

    return category
}

function getCategoryNameById(category_id) {
    const category = categoryData.find((category) => category._id === category_id)
    const categoryName = category.name

    return categoryName
}

function getJarName(category_id) {
    const object_values = Object.values(jars)
    let jarName = undefined

    for (let i in object_values) {
        const category = object_values[i].find(category => category.value === category_id)
        if (category) {
            jarName = Object.keys(jars)[i]
            break;
        }
    }

    return jarName
}

export { getCategories, getDefaultCategoryValue, getCategoryNameById, getJarName }