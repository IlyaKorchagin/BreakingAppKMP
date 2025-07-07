package org.korchagin.kmp.activity.profile.fragments

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.arrow_down
import breakingkmpapp.composeapp.generated.resources.camera_img
import breakingkmpapp.composeapp.generated.resources.noposition_linear
import breakingkmpapp.composeapp.generated.resources.norotation_linear
import breakingkmpapp.composeapp.generated.resources.noscale_linear
import breakingkmpapp.composeapp.generated.resources.position_linear
import breakingkmpapp.composeapp.generated.resources.rotation_linear
import breakingkmpapp.composeapp.generated.resources.scale_linear
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.theme.colors.AppColors
import team.platforma.extra_nav.component.fragment_component.Fragment
import team.platforma.extra_nav.utils.setResult
import team.platforma.imagecropper2.CropperColors
import team.platforma.imagecropper2.CropperIcons
import team.platforma.imagecropper2.ImageCropper
import team.platforma.multiplatform_material_extension.fab.AppFab


object AvatarCropperFragment : Fragment(
    route = "avatar_cropper_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        val image = fragmentNavigator.args()?.getByteArray(USER_AVATAR_KEY)
        image?.let {
            ImageCropper(
                image = it,
                cropButton = { crop ->
                    AppFab(
                        modifier = Modifier.align(Alignment.BottomEnd).padding(16.dp),
                        icon = {
                            Icon(
                                painter = painterResource(Res.drawable.camera_img),
                                contentDescription = null
                            )
                        },
                        onClick = {
                            crop()
                        },
                        hide = false
                    )
                },
                onImageCrop = { byteArray ->
                    setResult(USER_AVATAR_KEY, byteArray)
                    fragmentNavigator.navigateBack()
                },
                icons = CropperIcons(
                    size = Res.drawable.scale_linear,
                    noSize = Res.drawable.noscale_linear,
                    pan = Res.drawable.position_linear,
                    noPan = Res.drawable.noposition_linear,
                    rotate = Res.drawable.rotation_linear,
                    noRotate = Res.drawable.norotation_linear,
                    instruments = Res.drawable.arrow_down
                ),
                colors = CropperColors(
                 //   instruments = AppColors.bg.base().default,
                    icons = AppColors.colors().textDefault
                )
            )
        } ?: run {
            fragmentNavigator.navigateBack()
        }
    }
)
