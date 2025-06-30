package org.korchagin.kmp.utils

class StringUtils {

    fun transformName(string: String): String {
        return string.split("-").joinToString("-") { part ->
            part.split("'", "`").joinToString("'") { subPart ->
                subPart
                    .lowercase()
                    .split(" ")
                    .joinToString(" ") { word ->
                        word.replaceFirstChar { it.uppercaseChar() }
                    }
            }
        }
    }
    fun validateName(string: String): Boolean {
        val nameRegex = Regex("""^([А-ЯA-Z][а-яa-z]*(?:[-’']?[А-ЯA-Zа-яa-z]+)*\.?|[А-ЯA-Z]\.)\s?(([А-ЯA-Z][а-яa-z]*(?:[-’']?[А-ЯA-Zа-яa-z]+)*\.?|[А-ЯA-Z]\.)\s?)*$""")
        return string.matches(nameRegex)
    }

    fun validateEmail(string: String): Boolean {
        val enEmail = Regex("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\$")
        val ruEmail = Regex("[а-яА-Я0-9._%+-]+@[а-яА-Я0-9.-]+\\.[а-яА-Я]{2,}\$")
        return enEmail.matches(string) || ruEmail.matches(string)
    }

    fun validatePassword(string: String): Boolean {
        val passwordRegex = Regex("^[a-zA-Z0-9!@#$%^&*(),.?\":{}|<>_\\-+=/\\\\~`]*$")
        return passwordRegex.matches(string)
    }

    fun extractInitialsByName(string: String): String {
        val cleanedWords = string
            .trim()
            .split(Regex("\\s+"))
            .mapNotNull { word ->
                word
                    .trimStart('-', '\'', '’')
                    .split(Regex("[-'.’]"))
                    .firstOrNull { it.isNotEmpty() }
            }
            .mapNotNull { it.firstOrNull()?.uppercaseChar() }

        return when {
            cleanedWords.size >= 2 -> "${cleanedWords[0]}${cleanedWords[1]}"
            cleanedWords.size == 1 -> "${cleanedWords[0]}"
            else -> ""
        }
    }


}