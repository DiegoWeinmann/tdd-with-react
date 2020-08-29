import React from 'react';

export interface CongratsProps {
	success: boolean;
}

export default function Congrats({
	success,
}: React.PropsWithChildren<CongratsProps>) {
	return <main>{success && <div>Congrats</div>}</main>;
}
