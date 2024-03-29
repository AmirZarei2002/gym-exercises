import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const exrtraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ];
    return (
        <Stack
            gap="60px"
            sx={{
                flexDirection: { lg: 'row', p: '20px', alignItems: 'center' },
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
            />
            <Stack>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="h6">
                    Exercise keep you strong. {name} {` `}
                    is one of the best exercises to target your abs {target}. It
                    will help you improve your mood and gain energy .
                </Typography>
                {exrtraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction="row"
                        gap="24px"
                        alignItems="center"
                    >
                        <Button
                            sx={{
                                background: '#fff2bd',
                                borderRadius: '50%',
                                width: '100px',
                                height: '100px',
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{ width: '50px', height: '50px' }}
                            />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
