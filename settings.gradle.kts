rootProject.name = "BreakingKMPApp"
enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")

pluginManagement {
    repositories {
        google {
            mavenContent {
                includeGroupAndSubgroups("androidx")
                includeGroupAndSubgroups("com.android")
                includeGroupAndSubgroups("com.google")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}

dependencyResolutionManagement {
    repositories {
       // maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        google {
            mavenContent {
                includeGroupAndSubgroups("androidx")
                includeGroupAndSubgroups("com.android")
                includeGroupAndSubgroups("com.google")
            }
        }
        mavenCentral()
    }
}

include(":composeApp")

include(":module_main:presentation_main")
include(":module_main:data_main")
include(":module_main:domain_main")
include(":module_main:di_main")

include(":module_auth")
include(":module_auth:di_auth")
include(":module_auth:data_auth")
include(":module_auth:domain_auth")
include(":module_auth:presentation_auth")

include(":module_common")
