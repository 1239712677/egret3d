declare module Ammo {
	export const enum WorldType {
		CollisionOnly,
		RigidBodyDynamics,
		MultiBodyWorld,
		SoftBodyAndRigidBody,
	}

	export const enum Axis {
		X = 0,
		Y = 1,
		Z = 2,
	}

	export const enum ActivationState {
		Undefined = 0,
		ActiveTag = 1,
		IslandSleeping = 2,
		WantsDeactivation = 3,
		DisableDeactivation = 4,
		DisableSimulation = 5,
	}

	export const enum CollisionConfType {
		DefaultDynamicsWorldCollisionConf,
		SoftBodyRigidBodyCollisionConf,
	}

	export const enum BroadphaseType {
		DynamicAABBBroadphase,
		Axis3SweepBroadphase,
		SimpleBroadphase,
	}

	export const enum CollisionShapeType {
		BoxShape = 0,
		SphereShape = 1,
		CapsuleShape = 2,
		CylinderShape = 3,
		ConeShape = 4,
		ConvexHull = 5,
		CompoundShape = 6,
		BvhTriangleMeshShape = 7,
		StaticPlaneShape = 8,
	}

	export const enum CollisionObjectTypes {
		None = 0,
		CollisionObject = 1,
		RigidBody = 2,
		GhostObject = 4,
		SoftBody = 8,
		HFFluid = 16,
		UserType = 32,
		FeatherstoneLink = 64,
	}

	export const enum ConstraintType {
		ConstrainToPointInSpace,
		ConstrainToAnotherBody,
	}

	export const enum CollisionFlags {
		None = 0,
		StaticObject = 1,
		KinematicObject = 2,
		NoContactResponse = 4,
		CustomMaterialCallback = 8,
		CharacterObject = 16,
		DisableVisualizeObject = 32,
		DisableSpuCollisionProcessing = 64,
		HasContactStiffnessDamping = 128,
		HasCustomDebugRenderingColor = 256,
		HasFrictionAnchor = 512,
		HasCollisionSoundTrigger = 1024,
	}

	export const enum CollisionFilterGroups {
		AllFilter = -1,
		None = 0,
		DefaultFilter = 1,
		StaticFilter = 2,
		KinematicFilter = 4,
		DebrisFilter = 8,
		SensorTrigger = 16,
		CharacterFilter = 32,
	}
	//
	export function destroy(value: any): void;

	export class AJoint {
		constructor();
		m_axis: btVector3;
		m_icontrol: any;
		m_bodies: any;
		m_refs: btVector3;
		m_cfm: any;
		m_erp: any;
		m_split: any;
		m_drift: btVector3;
		m_sdrift: btVector3;
		m_massmatrix: btMatrix3x3;
		m_delete: boolean; Prepare(dt?: any, iterations?: number): void;
		Solve(dt?: any, sor?: any): void;
		Terminate(dt?: any): void;
		Type(): any;
		Joint(): any;
		Joint(): any;
	}
	export class AllHitsRayResultCallback {
		constructor(rayFromWorld?: btVector3, rayToWorld?: btVector3);
		m_collisionObjects: any;
		m_rayFromWorld: btVector3;
		m_rayToWorld: btVector3;
		m_hitNormalWorld: any;
		m_hitPointWorld: any;
		m_hitFractions: any;
		m_closestHitFraction: any;
		m_collisionObject: btCollisionObject;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_flags: number;
		addSingleResult(rayResult?: any, normalInWorldSpace?: boolean): any;
		RayResultCallback(): any;
		hasHit(): boolean;
		RayResultCallback(): any;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
	}
	export class Anchor {
		constructor();
		m_node: any;
		m_local: btVector3;
		m_body: btRigidBody;
		m_influence: any;
		m_c0: btMatrix3x3;
		m_c1: btVector3;
		m_c2: any;
	}


	export class bChunkInd {
		constructor();
		code: number;
		len: number;
		oldPtr: any;
		dna_nr: number;
		nr: number;
	}
	export class bChunkPtr4 {
		constructor();
		code: number;
		len: number;
		dna_nr: number;
		nr: number;
	}
	export class bChunkPtr8 {
		constructor();
		code: number;
		len: number;
		dna_nr: number;
		nr: number;
	}
	export class bDNA {
		constructor(); mCMPFlags: any;
		m_Names: any;
		mTypes: any;
		mStructs: any;
		mTlens: any;
		mStructReverse: any;
		mTypeLookup: any;
		mPtrLen: number;
		init(data?: string, len?: number, swap?: boolean): void;
		getArraySize(str?: string): number;
		getArraySizeNew(name?: number): number;
		getElementSize(type?: number, name?: number): number;
		getNumNames(): number;
		getName(ind?: number): any;
		getType(ind?: number): any;
		getStruct(ind?: number): any;
		getLength(ind?: number): number;
		getReverseType(type?: number): number;
		getReverseType(type?: string): number;
		getNumStructs(): number;
		lessThan(other?: bDNA): boolean;
		initCmpFlags(memDNA?: bDNA): void;
		flagNotEqual(dna_nr?: number): boolean;
		flagEqual(dna_nr?: number): boolean;
		flagNone(dna_nr?: number): boolean;
		getPointerSize(): number;
		dumpTypeDefinitions(): void;
		initRecurseCmpFlags(i?: number): void;
	}
	export class bFile {
		constructor(memoryBuffer?: string, len?: number, headerString?: string); m_headerString: string;
		mOwnsBuffer: boolean;
		mFileBuffer: any;
		mFileLen: number;
		mVersion: number;
		mLibPointers: any;
		mDataStart: number;
		mFileDNA: bDNA;
		mMemoryDNA: bDNA;
		m_pointerFixupArray: any;
		m_pointerPtrFixupArray: any;
		m_chunks: any;
		m_chunkPtrPtrMap: any;
		mDataPointers: any;
		mFlags: number;
		getFileDNA(): bDNA;
		addDataBlock(dataBlock?: string): void;
		getFlags(): number;
		setFileDNAisMemoryDNA(): void;
		getLibPointers(): any;
		findLibPointer(ptr?: void): any;
		ok(): boolean;
		parse(verboseMode?: number): void;
		write(fileName?: string, fixupPointers?: boolean): number;
		writeChunks(fp?: any, fixupPointers?: boolean): void;
		writeDNA(fp?: any): void;
		updateOldPointers(): void;
		resolvePointers(verboseMode?: number): void;
		dumpChunks(dna?: bDNA): void;
		setFileDNA(verboseMode?: number, buffer?: string, len?: number): void;
		getVersion(): number;
		preSwap(): void;
		writeFile(fileName?: string): void;
		getNextBlock(dataChunk?: bChunkInd, dataPtr?: string, flags?: number): number;
		safeSwapPtr(dst?: string, src?: string): void;
		parseHeader(): void;
		parseData(): void;
		resolvePointersMismatch(): void;
		resolvePointersChunk(dataChunk?: bChunkInd, verboseMode?: number): void;
		resolvePointersStructRecursive(strcPtr?: string, old_dna?: number, verboseMode?: number, recursion?: number): number;
		parseStruct(strcPtr?: string, dtPtr?: string, old_dna?: number, new_dna?: number, fixupPointers?: boolean): void;
		getMatchingFileDNA(old?: number, lookupName?: string, lookupType?: string, strcData?: string, data?: string, fixupPointers?: boolean): void;
		getFileElement(firstStruct?: number, lookupName?: string, lookupType?: string, data?: string, foundPos?: number): any;
		swap(head?: string, ch?: bChunkInd, ignoreEndianFlag?: boolean): void;
		swapData(data?: string, type?: number, arraySize?: number, ignoreEndianFlag?: boolean): void;
		swapStruct(dna_nr?: number, data?: string, ignoreEndianFlag?: boolean): void;
		swapLen(dataPtr?: string): void;
		swapDNA(ptr?: string): void;
		readStruct(head?: string, chunk?: bChunkInd): any;
		getAsString(code?: number): any;
		parseInternal(verboseMode?: number, memDna?: string, memDnaLength?: number): void;
	}
	export class bInvalidHandle {
		constructor(); unused: number;
	}
	export class bNameInfo {
		constructor(); m_name: any;
		m_isPointer: boolean;
		m_dim0: number;
		m_dim1: number;
	}
	export class Body {
		constructor(colObj?: btCollisionObject); m_soft: any;
		m_rigid: btRigidBody;
		m_collisionObject: btCollisionObject;
		activate(): void;
		invWorldInertia(): btMatrix3x3;
		invMass(): any;
		xform(): btTransform;
		linearVelocity(): btVector3;
		angularVelocity(rpos?: btVector3): btVector3;
		angularVelocity(): btVector3;
		velocity(rpos?: btVector3): btVector3;
		applyVImpulse(impulse?: btVector3, rpos?: btVector3): void;
		applyDImpulse(impulse?: btVector3, rpos?: btVector3): void;
		applyImpulse(impulse?: any, rpos?: btVector3): void;
		applyVAImpulse(impulse?: btVector3): void;
		applyDAImpulse(impulse?: btVector3): void;
		applyAImpulse(impulse?: any): void;
		applyDCImpulse(impulse?: btVector3): void;
	}
	export class BroadphaseAabbTester {
		constructor(orgCallback?: btBroadphaseAabbCallback); m_aabbCallback: btBroadphaseAabbCallback;
		Process(leaf?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class BroadphaseRayTester {
		constructor(orgCallback?: btBroadphaseRayCallback); m_rayCallback: btBroadphaseRayCallback;
		Process(leaf?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class bStructHandle {
		constructor(); unused: number;
	}
	export class bt32BitAxisSweep3 {
		constructor(worldAabbMin?: btVector3, worldAabbMax?: btVector3, maxHandles?: number, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btAxisSweep3Internal(worldAabbMin?: btVector3, worldAabbMax?: btVector3, inthandleMask?: any, inthandleSentinel?: any, intmaxHandles?: any, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean): any;
		btAxisSweep3Internal(): any;
		getNumHandles(): number;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		addHandle(aabbMin?: btVector3, aabbMax?: btVector3, pOwner?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): number;
		removeHandle(inthandle?: any, dispatcher?: btDispatcher): void;
		updateHandle(inthandle?: any, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getHandle(intindex?: any): any;
		resetPool(dispatcher?: btDispatcher): void;
		processAllOverlappingPairs(callback?: btOverlapCallback): void;
		createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
		quantize(out?: number, point?: btVector3, isMax?: number): void;
		unQuantize(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		testAabbOverlap(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		setOverlappingPairUserCallback(pairCallback?: btOverlappingPairCallback): void;
		getOverlappingPairUserCallback(): btOverlappingPairCallback;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		printStats(): void;
		btBroadphaseInterface(): any;
	}
	export class btAABB {
		constructor(V1?: btVector3, V2?: btVector3, V3?: btVector3, margin?: any); m_min: btVector3;
		m_max: btVector3;
		invalidate(): void;
		increment_margin(margin?: any): void;
		copy_with_margin(other?: btAABB, margin?: any): void;
		appy_transform(trans?: btTransform): void;
		appy_transform_trans_cache(trans?: any): void;
		merge(box?: btAABB): void;
		get_center_extend(center?: btVector3, extend?: btVector3): void;
		find_intersection(other?: btAABB, intersection?: btAABB): void;
		has_collision(other?: btAABB): boolean;
		collide_ray(vorigin?: btVector3, vdir?: btVector3): boolean;
		projection_interval(direction?: btVector3, vmin?: any, vmax?: any): void;
		plane_classify(plane?: btVector4): any;
		overlapping_trans_conservative(box?: btAABB, trans1_to_0?: btTransform): boolean;
		overlapping_trans_conservative2(box?: btAABB, trans1_to_0?: any): boolean;
		overlapping_trans_cache(box?: btAABB, transcache?: any, fulltest?: boolean): boolean;
		collide_plane(plane?: btVector4): boolean;
		collide_triangle_exact(p1?: btVector3, p2?: btVector3, p3?: btVector3, triangle_plane?: btVector4): boolean;
	}
	export class btActionInterface {
		constructor(); updateAction(collisionWorld?: btCollisionWorld, deltaTimeStep?: any): void;
		debugDraw(debugDrawer?: btIDebugDraw): void;
	}
	export class btActivatingCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper); btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
	}
	export class btAlignedAllocator { constructor(); }
	export class btAlignedObjectArray { constructor(); }
	export class btAngleCompareFunc {
		constructor(anchor?: btVector3); m_anchor: btVector3;
	}
	export class btAngularLimit {
		constructor(); m_center: any;
		m_halfRange: any;
		m_softness: any;
		m_biasFactor: any;
		m_relaxationFactor: any;
		m_correction: any;
		m_sign: any;
		m_solveLimit: boolean;
		set(low?: any, high?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any): void;
		test(angle?: any): void;
		getSoftness(): any;
		getBiasFactor(): any;
		getRelaxationFactor(): any;
		getCorrection(): any;
		getSign(): any;
		getHalfRange(): any;
		isLimit(): boolean;
		fit(angle?: any): void;
		getError(): any;
		getLow(): any;
		getHigh(): any;
	}
	export class btAxisSweep3 {
		constructor(worldAabbMin?: btVector3, worldAabbMax?: btVector3, maxHandles?: number, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btAxisSweep3Internal(worldAabbMin?: btVector3, worldAabbMax?: btVector3, inthandleMask?: number, inthandleSentinel?: number, intmaxHandles?: number, pairCache?: btOverlappingPairCache, disableRaycastAccelerator?: boolean): any;
		btAxisSweep3Internal(): any;
		getNumHandles(): number;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		addHandle(aabbMin?: btVector3, aabbMax?: btVector3, pOwner?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): number;
		removeHandle(inthandle?: number, dispatcher?: btDispatcher): void;
		updateHandle(inthandle?: number, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getHandle(intindex?: number): any;
		resetPool(dispatcher?: btDispatcher): void;
		processAllOverlappingPairs(callback?: btOverlapCallback): void;
		createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
		quantize(out?: number, point?: btVector3, isMax?: number): void;
		unQuantize(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		testAabbOverlap(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		setOverlappingPairUserCallback(pairCallback?: btOverlappingPairCallback): void;
		getOverlappingPairUserCallback(): btOverlappingPairCallback;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		printStats(): void;
		btBroadphaseInterface(): any;
	}
	export class btAxisSweep3Internal {
		constructor(); m_minEdges: any;
		m_maxEdges: any;
		m_dbvtProxy: btBroadphaseProxy;
		m_clientObject: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_multiSapParentProxy: any;
		m_uniqueId: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		SetNextFree(next?: any): void;
		GetNextFree(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getUid(): number;
		btBroadphaseProxy(): any;
		btBroadphaseProxy(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void): any;
	}
	export class btBlock {
		constructor(); previous: btBlock;
		address: any;
	}
	export class btBox2dBox2dCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btBox2dShape {
		constructor(boxHalfExtents?: btVector3); m_centroid: btVector3;
		m_vertices: btVector3;
		m_normals: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getHalfExtentsWithMargin(): btVector3;
		getHalfExtentsWithoutMargin(): btVector3;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		setLocalScaling(scaling?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getVertexCount(): number;
		getNumVertices(): number;
		getVertices(): btVector3;
		getNormals(): btVector3;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getCentroid(): btVector3;
		getNumPlanes(): number;
		getNumEdges(): number;
		getVertex(i?: number, vtx?: btVector3): void;
		getPlaneEquation(plane?: btVector4, i?: number): void;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btBoxBoxCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btBoxBoxDetector {
		constructor(box1?: btBoxShape, box2?: btBoxShape); m_box1: btBoxShape;
		m_box2: btBoxShape;
		getClosestPoints(input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean): void;
		btDiscreteCollisionDetectorInterface(): any;
	}
	export class btBoxShape extends btCollisionShape {
		constructor(boxHalfExtents?: btVector3); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getHalfExtentsWithMargin(): btVector3;
		getHalfExtentsWithoutMargin(): btVector3;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		setLocalScaling(scaling?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getNumPlanes(): number;
		getNumVertices(): number;
		getNumEdges(): number;
		getVertex(i?: number, vtx?: btVector3): void;
		getPlaneEquation(plane?: btVector4, i?: number): void;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btBridgedManifoldResult {
		constructor(obj0Wrap?: btCollisionObjectWrapper, obj1Wrap?: btCollisionObjectWrapper, resultCallback?: any); m_resultCallback: any;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any): void;
		btManifoldResult(): any;
		btManifoldResult(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btManifoldResult(): any;
		setPersistentManifold(manifoldPtr?: btPersistentManifold): void;
		getPersistentManifold(): btPersistentManifold;
		getPersistentManifold(): btPersistentManifold;
		setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
		refreshContactPoints(): void;
		getBody0Wrap(): btCollisionObjectWrapper;
		getBody1Wrap(): btCollisionObjectWrapper;
		setBody0Wrap(obj0Wrap?: btCollisionObjectWrapper): void;
		setBody1Wrap(obj1Wrap?: btCollisionObjectWrapper): void;
		getBody0Internal(): btCollisionObject;
		getBody1Internal(): btCollisionObject;
		Result(): any;
	}
	export class btBridgeProxy {
		constructor(); m_childProxy: btBroadphaseProxy;
		m_childBroadphase: btBroadphaseInterface;
	}
	export class btBroadphaseAabbCallback {
		constructor(); process(proxy?: btBroadphaseProxy): boolean;
	}
	export class btBroadphaseInterface {
		constructor(); createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		resetPool(dispatcher?: btDispatcher): void;
		printStats(): void;
	}
	export class btBroadphasePair {
		constructor(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy); m_pProxy0: btBroadphaseProxy;
		m_pProxy1: btBroadphaseProxy;
		m_algorithm: btCollisionAlgorithm;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btBroadphasePairSortPredicate { constructor(); }
	export class btBroadphaseProxy {
		constructor(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void); m_clientObject: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_multiSapParentProxy: any;
		m_uniqueId: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getUid(): number;
	}
	export class btBroadphaseRayCallback {
		constructor(); m_rayDirectionInverse: btVector3;
		m_signs: number;
		m_lambda_max: any;
		btBroadphaseAabbCallback(): any;
		process(proxy?: btBroadphaseProxy): boolean;
	}
	export class btBulletFile {
		constructor(memoryBuffer?: string, len?: number); m_multiBodies: any;
		m_softBodies: any;
		m_rigidBodies: any;
		m_collisionObjects: any;
		m_collisionShapes: any;
		m_constraints: any;
		m_bvhs: any;
		m_triangleInfoMaps: any;
		m_dynamicsWorldInfo: any;
		m_dataBlocks: any;
		m_DnaCopy: any;
		m_headerString: string;
		mOwnsBuffer: boolean;
		mFileBuffer: any;
		mFileLen: number;
		mVersion: number;
		mLibPointers: any;
		mDataStart: number;
		mFileDNA: bDNA;
		mMemoryDNA: bDNA;
		m_pointerFixupArray: any;
		m_pointerPtrFixupArray: any;
		m_chunks: any;
		m_chunkPtrPtrMap: any;
		mDataPointers: any;
		mFlags: number;
		addDataBlock(dataBlock?: string): void;
		write(fileName?: string, fixupPointers?: boolean): number;
		parse(verboseMode?: number): void;
		parseData(): void;
		writeDNA(fp?: any): void;
		addStruct(structType?: string, data?: void, len?: number, oldPtr?: void, code?: number): void;
		bFile(filename?: string, headerString?: string): any;
		bFile(memoryBuffer?: string, len?: number, headerString?: string): any;
		bFile(): any;
		getFileDNA(): bDNA;
		getFlags(): number;
		setFileDNAisMemoryDNA(): void;
		getLibPointers(): any;
		findLibPointer(ptr?: void): any;
		ok(): boolean;
		writeChunks(fp?: any, fixupPointers?: boolean): void;
		updateOldPointers(): void;
		resolvePointers(verboseMode?: number): void;
		dumpChunks(dna?: bDNA): void;
		setFileDNA(verboseMode?: number, buffer?: string, len?: number): void;
		getVersion(): number;
		preSwap(): void;
		writeFile(fileName?: string): void;
	}
	export class btBulletSerializedArrays {
		constructor(); m_bvhsDouble: any;
		m_bvhsFloat: any;
		m_colShapeData: any;
		m_dynamicWorldInfoDataDouble: any;
		m_dynamicWorldInfoDataFloat: any;
		m_rigidBodyDataDouble: any;
		m_rigidBodyDataFloat: any;
		m_collisionObjectDataDouble: any;
		m_collisionObjectDataFloat: any;
		m_constraintDataFloat: any;
		m_constraintDataDouble: any;
		m_constraintData: any;
		m_softBodyFloatData: any;
		m_softBodyDoubleData: any;
	}
	export class btBulletWorldImporter {
		constructor(world?: btDynamicsWorld); loadFile(fileName?: string, preSwapFilenameOut?: string): boolean;
		loadFileFromMemory(memoryBuffer?: string, len?: number): boolean;
		loadFileFromMemory(file?: any): boolean;
		convertAllObjects(file?: any): boolean;
		btWorldImporter(world?: btDynamicsWorld): any;
		btWorldImporter(): any;
		deleteAllData(): void;
		setVerboseMode(verboseMode?: number): void;
		getVerboseMode(): number;
		getNumCollisionShapes(): number;
		getCollisionShapeByIndex(index?: number): btCollisionShape;
		getNumRigidBodies(): number;
		getRigidBodyByIndex(index?: number): btCollisionObject;
		getNumConstraints(): number;
		getConstraintByIndex(index?: number): btTypedConstraint;
		getNumBvhs(): number;
		getBvhByIndex(index?: number): btOptimizedBvh;
		getNumTriangleInfoMaps(): number;
		getTriangleInfoMapByIndex(index?: number): btTriangleInfoMap;
		getCollisionShapeByName(name?: string): btCollisionShape;
		getRigidBodyByName(name?: string): btRigidBody;
		getConstraintByName(name?: string): btTypedConstraint;
		getNameForPointer(ptr?: void): any;
		setDynamicsWorldInfo(gravity?: btVector3, solverInfo?: btContactSolverInfo): void;
		createRigidBody(isDynamic?: boolean, mass?: any, startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string): btRigidBody;
		createCollisionObject(startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string): btCollisionObject;
		createPlaneShape(planeNormal?: btVector3, planeConstant?: any): btCollisionShape;
		createBoxShape(halfExtents?: btVector3): btCollisionShape;
		createSphereShape(radius?: any): btCollisionShape;
		createCapsuleShapeX(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeY(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeZ(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeX(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeY(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeZ(radius?: any, height?: any): btCollisionShape;
		createConeShapeX(radius?: any, height?: any): btCollisionShape;
		createConeShapeY(radius?: any, height?: any): btCollisionShape;
		createConeShapeZ(radius?: any, height?: any): btCollisionShape;
		createTriangleMeshContainer(): btTriangleIndexVertexArray;
		createBvhTriangleMeshShape(trimesh?: btStridingMeshInterface, bvh?: btOptimizedBvh): btBvhTriangleMeshShape;
		createConvexTriangleMeshShape(trimesh?: btStridingMeshInterface): btCollisionShape;
		createGimpactShape(trimesh?: btStridingMeshInterface): btGImpactMeshShape;
		createStridingMeshInterfaceData(interfaceData?: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
		createConvexHullShape(): btConvexHullShape;
		createCompoundShape(): btCompoundShape;
		createScaledTrangleMeshShape(meshShape?: btBvhTriangleMeshShape, localScalingbtBvhTriangleMeshShape?: btVector3): btScaledBvhTriangleMeshShape;
		createMultiSphereShape(positions?: btVector3, radi?: any, numSpheres?: number): btMultiSphereShape;
		createMeshInterface(meshData?: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
		createOptimizedBvh(): btOptimizedBvh;
		createTriangleInfoMap(): btTriangleInfoMap;
		createPoint2PointConstraint(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3): btPoint2PointConstraint;
		createPoint2PointConstraint(rbA?: btRigidBody, pivotInA?: btVector3): btPoint2PointConstraint;
		createHingeConstraint(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform, useReferenceFrameA?: boolean): btHingeConstraint;
		createHingeConstraint(rbA?: btRigidBody, rbAFrame?: btTransform, useReferenceFrameA?: boolean): btHingeConstraint;
		createConeTwistConstraint(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform): btConeTwistConstraint;
		createConeTwistConstraint(rbA?: btRigidBody, rbAFrame?: btTransform): btConeTwistConstraint;
		createGeneric6DofConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btGeneric6DofConstraint;
		createGeneric6DofConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameB?: boolean): btGeneric6DofConstraint;
		createGeneric6DofSpringConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btGeneric6DofSpringConstraint;
		createGeneric6DofSpring2Constraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotateOrder?: number): btGeneric6DofSpring2Constraint;
		createSliderConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btSliderConstraint;
		createSliderConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btSliderConstraint;
		createGearConstraint(rbA?: btRigidBody, rbB?: btRigidBody, axisInA?: btVector3, axisInB?: btVector3, ratio?: any): btGearConstraint;
	}
	export class btBU_Simplex1to4 {
		constructor(pt0?: btVector3, pt1?: btVector3, pt2?: btVector3, pt3?: btVector3); m_numVertices: number;
		m_vertices: btVector3;
		m_polyhedron: btConvexPolyhedron;
		m_localScaling: btVector3;
		m_implicitShapeDimensions: btVector3;
		m_collisionMargin: any;
		m_padding: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		reset(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		addVertex(pt?: btVector3): void;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getIndex(i?: number): number;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		btPolyhedralConvexAabbCachingShape(): any;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		setLocalScaling(scaling?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btBvhSubtreeInfo {
		constructor(); m_quantizedAabbMin: number;
		m_quantizedAabbMax: number;
		m_rootNodeIndex: number;
		m_subtreeSize: number;
		m_padding: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setAabbFromQuantizeNode(quantizedNode?: btQuantizedBvhNode): void;
	}
	export class btBvhSubtreeInfoData {
		constructor(); m_rootNodeIndex: number;
		m_subtreeSize: number;
		m_quantizedAabbMin: number;
		m_quantizedAabbMax: number;
	}
	export class btBvhTree {
		constructor(); m_num_nodes: number;
		m_node_array: any;
		build_tree(primitive_boxes?: any): void;
		clearNodes(): void;
		getNodeCount(): number;
		isLeafNode(nodeindex?: number): boolean;
		getNodeData(nodeindex?: number): number;
		getNodeBound(nodeindex?: number, bound?: btAABB): void;
		setNodeBound(nodeindex?: number, bound?: btAABB): void;
		getLeftNode(nodeindex?: number): number;
		getRightNode(nodeindex?: number): number;
		getEscapeNodeIndex(nodeindex?: number): number;
		get_node_pointer(index?: number): any;
		_sort_and_calc_splitting_index(primitive_boxes?: any, startIndex?: number, endIndex?: number, splitAxis?: number): number;
		_calc_splitting_axis(primitive_boxes?: any, startIndex?: number, endIndex?: number): number;
		_build_sub_tree(primitive_boxes?: any, startIndex?: number, endIndex?: number): void;
	}
	export class btBvhTriangleMeshShape {
		constructor(meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, buildBvh?: boolean); m_bvh: btOptimizedBvh;
		m_triangleInfoMap: btTriangleInfoMap;
		m_useQuantizedAabbCompression: boolean;
		m_ownsBvh: boolean;
		m_pad: boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getOwnsBvh(): boolean;
		performRaycast(callback?: btTriangleCallback, raySource?: btVector3, rayTarget?: btVector3): void;
		performConvexcast(callback?: btTriangleCallback, boxSource?: btVector3, boxTarget?: btVector3, boxMin?: btVector3, boxMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		refitTree(aabbMin?: btVector3, aabbMax?: btVector3): void;
		partialRefitTree(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getName(): any;
		setLocalScaling(scaling?: btVector3): void;
		getOptimizedBvh(): btOptimizedBvh;
		setOptimizedBvh(bvh?: btOptimizedBvh, localScaling?: btVector3, a?: any, b?: any): void;
		buildOptimizedBvh(): void;
		usesQuantizedAabbCompression(): boolean;
		setTriangleInfoMap(triangleInfoMap?: btTriangleInfoMap): void;
		getTriangleInfoMap(): btTriangleInfoMap;
		getTriangleInfoMap(): btTriangleInfoMap;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleBvh(serializer?: btSerializer): void;
		serializeSingleTriangleInfoMap(serializer?: btSerializer): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTriangleMeshShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		recalcLocalAabb(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getLocalScaling(): btVector3;
		getMeshInterface(): btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		getLocalAabbMin(): btVector3;
		getLocalAabbMax(): btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCapsuleShape extends btCollisionShape {
		constructor(radius?: any, height?: any); m_upAxis: number;
		m_localScaling: btVector3;
		m_implicitShapeDimensions: btVector3;
		m_collisionMargin: any;
		m_padding: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getName(): any;
		getUpAxis(): number;
		getRadius(): any;
		getHalfHeight(): any;
		setLocalScaling(scaling?: btVector3): void;
		getAnisotropicRollingFrictionDirection(): btVector3;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerializeFloat(dataBuffer?: btCapsuleShapeData): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
		btConvexInternalShape(): any;
	}
	export class btCapsuleShapeData {
		constructor(); m_convexInternalShapeData: btConvexInternalShapeData;
		m_upAxis: number;
		m_padding: string;
	}
	export class btCapsuleShapeX extends btCollisionShape {
		constructor(radius?: any, height?: any); getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCapsuleShape(radius?: any, height?: any): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getUpAxis(): number;
		getRadius(): any;
		getHalfHeight(): any;
		setLocalScaling(scaling?: btVector3): void;
		getAnisotropicRollingFrictionDirection(): btVector3;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerializeFloat(dataBuffer?: btCapsuleShapeData): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCapsuleShapeZ extends btCollisionShape {
		constructor(radius?: any, height?: any); getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCapsuleShape(radius?: any, height?: any): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getUpAxis(): number;
		getRadius(): any;
		getHalfHeight(): any;
		setLocalScaling(scaling?: btVector3): void;
		getAnisotropicRollingFrictionDirection(): btVector3;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerializeFloat(dataBuffer?: btCapsuleShapeData): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCharacterControllerInterface {
		constructor(); setWalkDirection(walkDirection?: btVector3): void;
		setVelocityForTimeInterval(velocity?: btVector3, timeInterval?: any): void;
		reset(collisionWorld?: btCollisionWorld): void;
		warp(origin?: btVector3): void;
		preStep(collisionWorld?: btCollisionWorld): void;
		playerStep(collisionWorld?: btCollisionWorld, dt?: any): void;
		canJump(): boolean;
		jump(): void;
		onGround(): boolean;
		setUpInterpolate(value?: boolean): void;
		btActionInterface(): any;
		updateAction(collisionWorld?: btCollisionWorld, deltaTimeStep?: any): void;
		debugDraw(debugDrawer?: btIDebugDraw): void;
	}
	export class btCharIndexTripletData {
		constructor(); m_values: string;
		m_pad: string;
	}
	export class btChunk {
		constructor(); m_chunkCode: number;
		m_length: number;
		m_oldPtr: any;
		m_dna_nr: number;
		m_number: number;
	}
	export class btClock {
		constructor(other?: btClock); m_data: btClockData;
		reset(): void;
		getTimeMilliseconds(): number;
		getTimeMicroseconds(): number;
		getTimeSeconds(): any;
	}
	export class btClockData {
		constructor(); mClockFrequency: any;
		mStartTick: any;
		mPrevElapsedTime: any;
		mStartTime: any;
	}
	export class btClosestNotMeConvexResultCallback {
		constructor(me?: btCollisionObject, fromA?: btVector3, toA?: btVector3, pairCache?: btOverlappingPairCache, dispatcher?: btDispatcher); m_me: btCollisionObject;
		m_allowedPenetration: any;
		m_pairCache: btOverlappingPairCache;
		m_dispatcher: btDispatcher;
		m_convexFromWorld: btVector3;
		m_convexToWorld: btVector3;
		m_hitNormalWorld: btVector3;
		m_hitPointWorld: btVector3;
		m_hitCollisionObject: btCollisionObject;
		m_closestHitFraction: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		addSingleResult(convexResult?: any, normalInWorldSpace?: boolean): any;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
		ClosestConvexResultCallback(convexFromWorld?: btVector3, convexToWorld?: btVector3): any;
		ConvexResultCallback(): any;
		ConvexResultCallback(): any;
		hasHit(): boolean;
	}
	export class btCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo); m_dispatcher: btDispatcher;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
	}
	export class btCollisionAlgorithmConstructionInfo {
		constructor(dispatcher?: btDispatcher, temp?: number); m_dispatcher1: btDispatcher;
		m_manifold: btPersistentManifold;
	}
	export class btCollisionAlgorithmCreateFunc {
		constructor(); m_swapped: boolean;
		CreateCollisionAlgorithm(arg1?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): btCollisionAlgorithm;
	}
	export class btCollisionConfiguration {
		constructor(); getPersistentManifoldPool(): btPoolAllocator;
		getCollisionAlgorithmPool(): btPoolAllocator;
		getCollisionAlgorithmCreateFunc(proxyType0?: number, proxyType1?: number): btCollisionAlgorithmCreateFunc;
	}
	export class btCollisionDispatcher {
		constructor(collisionConfiguration?: btCollisionConfiguration); m_dispatcherFlags: number;
		m_manifoldsPtr: any;
		m_defaultManifoldResult: btManifoldResult;
		m_nearCallback: any;
		m_collisionAlgorithmPoolAllocator: btPoolAllocator;
		m_persistentManifoldPoolAllocator: btPoolAllocator;
		m_doubleDispatch: btCollisionAlgorithmCreateFunc;
		m_collisionConfiguration: btCollisionConfiguration;
		getDispatcherFlags(): number;
		setDispatcherFlags(flags?: number): void;
		registerCollisionCreateFunc(proxyType0?: number, proxyType1?: number, createFunc?: btCollisionAlgorithmCreateFunc): void;
		getNumManifolds(): number;
		getInternalManifoldPointer(): btPersistentManifold;
		getManifoldByIndexInternal(index?: number): btPersistentManifold;
		getManifoldByIndexInternal(index?: number): btPersistentManifold;
		getNewManifold(b0?: btCollisionObject, b1?: btCollisionObject): btPersistentManifold;
		releaseManifold(manifold?: btPersistentManifold): void;
		clearManifold(manifold?: btPersistentManifold): void;
		findAlgorithm(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, sharedManifold?: btPersistentManifold): btCollisionAlgorithm;
		needsCollision(body0?: btCollisionObject, body1?: btCollisionObject): boolean;
		needsResponse(body0?: btCollisionObject, body1?: btCollisionObject): boolean;
		dispatchAllCollisionPairs(pairCache?: btOverlappingPairCache, dispatchInfo?: btDispatcherInfo, dispatcher?: btDispatcher): void;
		setNearCallback(nearCallback?: any): void;
		getNearCallback(): any;
		allocateCollisionAlgorithm(size?: number): any;
		freeCollisionAlgorithm(ptr?: void): void;
		getCollisionConfiguration(): btCollisionConfiguration;
		getCollisionConfiguration(): btCollisionConfiguration;
		setCollisionConfiguration(config?: btCollisionConfiguration): void;
		getInternalManifoldPool(): btPoolAllocator;
		getInternalManifoldPool(): btPoolAllocator;
		btDispatcher(): any;
	}
	export class btCollisionObject {
		constructor(); m_worldTransform: btTransform;
		m_interpolationWorldTransform: btTransform;
		m_interpolationLinearVelocity: btVector3;
		m_interpolationAngularVelocity: btVector3;
		m_anisotropicFriction: btVector3;
		m_hasAnisotropicFriction: number;
		m_contactProcessingThreshold: any;
		m_broadphaseHandle: btBroadphaseProxy;
		m_collisionShape: btCollisionShape;
		m_extensionPointer: any;
		m_rootCollisionShape: btCollisionShape;
		m_collisionFlags: number;
		m_islandTag1: number;
		m_companionId: number;
		m_activationState1: number;
		m_deactivationTime: any;
		m_friction: any;
		m_restitution: any;
		m_rollingFriction: any;
		m_internalType: number;
		m_userObjectPointer: any;
		m_userIndex: number;
		m_hitFraction: any;
		m_ccdSweptSphereRadius: any;
		m_ccdMotionThreshold: any;
		m_checkCollideWith: number;
		m_objectsWithoutCollisionCheck: any;
		m_updateRevision: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleObject(serializer?: btSerializer): void;
	}
	export class btCollisionObjectDoubleData {
		constructor(); m_broadphaseHandle: any;
		m_collisionShape: any;
		m_rootCollisionShape: btCollisionShapeData;
		m_name: any;
		m_worldTransform: btTransformDoubleData;
		m_interpolationWorldTransform: btTransformDoubleData;
		m_interpolationLinearVelocity: btVector3DoubleData;
		m_interpolationAngularVelocity: btVector3DoubleData;
		m_anisotropicFriction: btVector3DoubleData;
		m_contactProcessingThreshold: any;
		m_deactivationTime: any;
		m_friction: any;
		m_rollingFriction: any;
		m_restitution: any;
		m_hitFraction: any;
		m_ccdSweptSphereRadius: any;
		m_ccdMotionThreshold: any;
		m_hasAnisotropicFriction: number;
		m_collisionFlags: number;
		m_islandTag1: number;
		m_companionId: number;
		m_activationState1: number;
		m_internalType: number;
		m_checkCollideWith: number;
		m_padding: string;
	}
	export class btCollisionObjectFloatData {
		constructor(); m_broadphaseHandle: any;
		m_collisionShape: any;
		m_rootCollisionShape: btCollisionShapeData;
		m_name: any;
		m_worldTransform: btTransformFloatData;
		m_interpolationWorldTransform: btTransformFloatData;
		m_interpolationLinearVelocity: btVector3FloatData;
		m_interpolationAngularVelocity: btVector3FloatData;
		m_anisotropicFriction: btVector3FloatData;
		m_contactProcessingThreshold: number;
		m_deactivationTime: number;
		m_friction: number;
		m_rollingFriction: number;
		m_restitution: number;
		m_hitFraction: number;
		m_ccdSweptSphereRadius: number;
		m_ccdMotionThreshold: number;
		m_hasAnisotropicFriction: number;
		m_collisionFlags: number;
		m_islandTag1: number;
		m_companionId: number;
		m_activationState1: number;
		m_internalType: number;
		m_checkCollideWith: number;
		m_padding: string;
	}
	export class btCollisionObjectWrapper {
		constructor(parent?: btCollisionObjectWrapper, shape?: btCollisionShape, collisionObject?: btCollisionObject, worldTransform?: btTransform, partId?: number, index?: number); m_parent: btCollisionObjectWrapper;
		m_shape: btCollisionShape;
		m_collisionObject: btCollisionObject;
		m_worldTransform: btTransform;
		m_partId: number;
		m_index: number;
		getWorldTransform(): btTransform;
		getCollisionObject(): btCollisionObject;
		getCollisionShape(): btCollisionShape;
	}
	export class btCollisionPairCallback {
		constructor(dispatchInfo?: btDispatcherInfo, dispatcher?: btCollisionDispatcher); m_dispatchInfo: btDispatcherInfo;
		m_dispatcher: btCollisionDispatcher;
		processOverlap(pair?: btBroadphasePair): boolean;
		btOverlapCallback(): any;
	}
	export class btCollisionShape {
		constructor(); m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCollisionShapeData {
		constructor(); m_name: any;
		m_shapeType: number;
		m_padding: string;
	}
	export class btCollisionWorld {
		constructor(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration); m_collisionObjects: any;
		m_dispatcher1: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_broadphasePairCache: btBroadphaseInterface;
		m_debugDrawer: btIDebugDraw;
		m_forceUpdateAllAabbs: boolean;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		updateAabbs(): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawWorld(): void;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		serialize(serializer?: btSerializer): void;
		serializeCollisionObjects(serializer?: btSerializer): void;
	}
	export class btCollisionWorldImporter {
		constructor(world?: btCollisionWorld); m_collisionWorld: btCollisionWorld;
		m_verboseMode: number;
		m_allocatedCollisionShapes: any;
		m_allocatedRigidBodies: any;
		m_allocatedBvhs: any;
		m_allocatedTriangleInfoMaps: any;
		m_allocatedTriangleIndexArrays: any;
		m_allocatedbtStridingMeshInterfaceDatas: any;
		m_allocatedCollisionObjects: any;
		m_allocatedNames: any;
		m_indexArrays: any;
		m_shortIndexArrays: any;
		m_charIndexArrays: any;
		m_floatVertexArrays: any;
		m_doubleVertexArrays: any;
		m_bvhMap: any;
		m_timMap: any;
		m_nameShapeMap: any;
		m_nameColObjMap: any;
		m_objectNameMap: any;
		m_shapeMap: any;
		m_bodyMap: any;
		convertAllObjects(arrays?: btBulletSerializedArrays): boolean;
		deleteAllData(): void;
		setVerboseMode(verboseMode?: number): void;
		getVerboseMode(): number;
		getNumCollisionShapes(): number;
		getCollisionShapeByIndex(index?: number): btCollisionShape;
		getNumRigidBodies(): number;
		getRigidBodyByIndex(index?: number): btCollisionObject;
		getNumConstraints(): number;
		getNumBvhs(): number;
		getBvhByIndex(index?: number): btOptimizedBvh;
		getNumTriangleInfoMaps(): number;
		getTriangleInfoMapByIndex(index?: number): btTriangleInfoMap;
		getCollisionShapeByName(name?: string): btCollisionShape;
		getCollisionObjectByName(name?: string): btCollisionObject;
		getNameForPointer(ptr?: void): any;
		createCollisionObject(startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string): btCollisionObject;
		createPlaneShape(planeNormal?: btVector3, planeConstant?: any): btCollisionShape;
		createBoxShape(halfExtents?: btVector3): btCollisionShape;
		createSphereShape(radius?: any): btCollisionShape;
		createCapsuleShapeX(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeY(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeZ(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeX(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeY(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeZ(radius?: any, height?: any): btCollisionShape;
		createConeShapeX(radius?: any, height?: any): btCollisionShape;
		createConeShapeY(radius?: any, height?: any): btCollisionShape;
		createConeShapeZ(radius?: any, height?: any): btCollisionShape;
		createTriangleMeshContainer(): btTriangleIndexVertexArray;
		createBvhTriangleMeshShape(trimesh?: btStridingMeshInterface, bvh?: btOptimizedBvh): btBvhTriangleMeshShape;
		createConvexTriangleMeshShape(trimesh?: btStridingMeshInterface): btCollisionShape;
		createStridingMeshInterfaceData(interfaceData?: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
		createConvexHullShape(): btConvexHullShape;
		createCompoundShape(): btCompoundShape;
		createScaledTrangleMeshShape(meshShape?: btBvhTriangleMeshShape, localScalingbtBvhTriangleMeshShape?: btVector3): btScaledBvhTriangleMeshShape;
		createMultiSphereShape(positions?: btVector3, radi?: any, numSpheres?: number): btMultiSphereShape;
		createMeshInterface(meshData?: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
		createOptimizedBvh(): btOptimizedBvh;
		createTriangleInfoMap(): btTriangleInfoMap;
		duplicateName(name?: string): any;
		convertCollisionShape(shapeData?: btCollisionShapeData): btCollisionShape;
	}
	export class btCompoundCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_childCollisionAlgorithms: any;
		m_isSwapped: boolean;
		m_sharedManifold: btPersistentManifold;
		m_ownsManifold: boolean;
		m_compoundShapeRevision: number;
		m_dispatcher: btDispatcher;
		getChildAlgorithm(n?: number): btCollisionAlgorithm;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
		removeChildAlgorithms(): void;
		preallocateChildAlgorithms(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): void;
	}
	export class btCompoundCompoundCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_childCollisionAlgorithmCache: btHashedSimplePairCache;
		m_removePairs: any;
		m_compoundShapeRevision0: number;
		m_compoundShapeRevision1: number;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btCompoundCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean): any;
		btCompoundCollisionAlgorithm(): any;
		getChildAlgorithm(n?: number): btCollisionAlgorithm;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
		removeChildAlgorithms(): void;
	}
	export class btCompoundCompoundLeafCallback {
		constructor(compound1ObjWrap?: btCollisionObjectWrapper, compound0ObjWrap?: btCollisionObjectWrapper, dispatcher?: btDispatcher, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult, childAlgorithmsCache?: btHashedSimplePairCache, sharedManifold?: btPersistentManifold); m_numOverlapPairs: number;
		m_compound0ColObjWrap: btCollisionObjectWrapper;
		m_compound1ColObjWrap: btCollisionObjectWrapper;
		m_dispatcher: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_resultOut: btManifoldResult;
		m_childCollisionAlgorithmCache: btHashedSimplePairCache;
		m_sharedManifold: btPersistentManifold;
		Process(leaf0?: btDbvtNode, leaf1?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class btCompoundLeafCallback {
		constructor(compoundObjWrap?: btCollisionObjectWrapper, otherObjWrap?: btCollisionObjectWrapper, dispatcher?: btDispatcher, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult, childCollisionAlgorithms?: btCollisionAlgorithm, sharedManifold?: btPersistentManifold); m_compoundColObjWrap: btCollisionObjectWrapper;
		m_otherObjWrap: btCollisionObjectWrapper;
		m_dispatcher: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_resultOut: btManifoldResult;
		m_childCollisionAlgorithms: btCollisionAlgorithm;
		m_sharedManifold: btPersistentManifold;
		ProcessChildShape(childShape?: btCollisionShape, index?: number): void;
		Process(leaf?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class btCompoundShape {
		constructor(enableDynamicAabbTree?: boolean, initialChildCapacity?: number); m_localScaling: btVector3;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		m_children: any;
		m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_dynamicAabbTree: btDbvt;
		m_updateRevision: number;
		m_collisionMargin: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		addChildShape(localTransform?: btTransform, shape?: btCollisionShape): void;
		removeChildShape(shape?: btCollisionShape): void;
		removeChildShapeByIndex(childShapeindex?: number): void;
		getNumChildShapes(): number;
		getChildShape(index?: number): btCollisionShape;
		getChildShape(index?: number): btCollisionShape;
		getChildTransform(index?: number): btTransform;
		getChildTransform(index?: number): btTransform;
		updateChildTransform(childIndex?: number, newChildTransform?: btTransform, shouldRecalculateLocalAabb?: boolean): void;
		getChildList(): btCompoundShapeChild;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalculateLocalAabb(): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setMargin(margin?: any): void;
		getMargin(): any;
		getName(): any;
		getDynamicAabbTree(): btDbvt;
		getDynamicAabbTree(): btDbvt;
		createAabbTreeFromChildren(): void;
		calculatePrincipalAxisTransform(masses?: any, principal?: btTransform, inertia?: btVector3): void;
		getUpdateRevision(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCompoundShapeChild {
		constructor(); m_transform: btTransform;
		m_childShape: btCollisionShape;
		m_childShapeType: number;
		m_childMargin: any;
		m_node: btDbvtNode;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btCompoundShapeChildData {
		constructor(); m_transform: btTransformFloatData;
		m_childShape: btCollisionShapeData;
		m_childShapeType: number;
		m_childMargin: number;
	}
	export class btCompoundShapeData {
		constructor(); m_collisionShapeData: btCollisionShapeData;
		m_childShapePtr: btCompoundShapeChildData;
		m_numChildShapes: number;
		m_collisionMargin: number;
	}
	export class btConcaveShape {
		constructor(); m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConeShape extends btCollisionShape {
		constructor(radius?: any, height?: any); m_sinAngle: any;
		m_radius: any;
		m_height: any;
		m_coneIndices: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getRadius(): any;
		getHeight(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		setConeUpIndex(upIndex?: number): void;
		getConeUpIndex(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
		coneLocalSupport(v?: btVector3): btVector3;
	}
	export class btConeShapeData {
		constructor(); m_convexInternalShapeData: btConvexInternalShapeData;
		m_upIndex: number;
		m_padding: string;
	}
	export class btConeShapeX extends btCollisionShape {
		constructor(radius?: any, height?: any); getAnisotropicRollingFrictionDirection(): btVector3;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConeShape(radius?: any, height?: any): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getRadius(): any;
		getHeight(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setConeUpIndex(upIndex?: number): void;
		getConeUpIndex(): number;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConeShapeZ extends btCollisionShape {
		constructor(radius?: any, height?: any); getAnisotropicRollingFrictionDirection(): btVector3;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConeShape(radius?: any, height?: any): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getRadius(): any;
		getHeight(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setConeUpIndex(upIndex?: number): void;
		getConeUpIndex(): number;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConeTwistConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform); m_jac: btJacobianEntry;
		m_rbAFrame: btTransform;
		m_rbBFrame: btTransform;
		m_limitSoftness: any;
		m_biasFactor: any;
		m_relaxationFactor: any;
		m_damping: any;
		m_swingSpan1: any;
		m_swingSpan2: any;
		m_twistSpan: any;
		m_fixThresh: any;
		m_swingAxis: btVector3;
		m_twistAxis: btVector3;
		m_kSwing: any;
		m_kTwist: any;
		m_twistLimitSign: any;
		m_swingCorrection: any;
		m_twistCorrection: any;
		m_twistAngle: any;
		m_accSwingLimitImpulse: any;
		m_accTwistLimitImpulse: any;
		m_angularOnly: boolean;
		m_solveTwistLimit: boolean;
		m_solveSwingLimit: boolean;
		m_useSolveConstraintObsolete: boolean;
		m_swingLimitRatio: any;
		m_twistLimitRatio: any;
		m_twistAxisA: btVector3;
		m_bMotorEnabled: boolean;
		m_bNormalizedMotorStrength: boolean;
		m_qTarget: btQuaternion;
		m_maxMotorImpulse: any;
		m_accMotorImpulse: btVector3;
		m_flags: number;
		m_linCFM: any;
		m_linERP: any;
		m_angCFM: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, invInertiaWorldA?: btMatrix3x3, invInertiaWorldB?: btMatrix3x3): void;
		solveConstraintObsolete(bodyA?: btSolverBody, bodyB?: btSolverBody, timeStep?: any): void;
		updateRHS(timeStep?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		setAngularOnly(angularOnly?: boolean): void;
		setLimit(limitIndex?: number, limitValue?: any): void;
		setLimit(_swingSpan1?: any, _swingSpan2?: any, _twistSpan?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any): void;
		getAFrame(): btTransform;
		getBFrame(): btTransform;
		getSolveTwistLimit(): number;
		getSolveSwingLimit(): number;
		getTwistLimitSign(): any;
		calcAngleInfo(): void;
		calcAngleInfo2(transA?: btTransform, transB?: btTransform, invInertiaWorldA?: btMatrix3x3, invInertiaWorldB?: btMatrix3x3): void;
		getSwingSpan1(): any;
		getSwingSpan2(): any;
		getTwistSpan(): any;
		getTwistAngle(): any;
		isPastSwingLimit(): boolean;
		setDamping(damping?: any): void;
		enableMotor(b?: boolean): void;
		setMaxMotorImpulse(maxMotorImpulse?: any): void;
		setMaxMotorImpulseNormalized(maxMotorImpulse?: any): void;
		getFixThresh(): any;
		setFixThresh(fixThresh?: any): void;
		setMotorTarget(q?: btQuaternion): void;
		setMotorTargetInConstraintSpace(q?: btQuaternion): void;
		GetPointForAngle(fAngleInRadians?: any, fLength?: any): btVector3;
		setParam(num?: number, value?: any, axis?: number): void;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		init(): void;
		computeConeLimitInfo(qCone?: btQuaternion, swingAngle?: any, vSwingAxis?: btVector3, swingLimit?: any): void;
		computeTwistLimitInfo(qTwist?: btQuaternion, twistAngle?: any, vTwistAxis?: btVector3): void;
		adjustSwingAxisToUseEllipseNormal(vSwingAxis?: btVector3): void;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btConeTwistConstraintData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformFloatData;
		m_rbBFrame: btTransformFloatData;
		m_swingSpan1: number;
		m_swingSpan2: number;
		m_twistSpan: number;
		m_limitSoftness: number;
		m_biasFactor: number;
		m_relaxationFactor: number;
		m_damping: number;
		m_pad: string;
	}
	export class btConeTwistConstraintDoubleData {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_swingSpan1: any;
		m_swingSpan2: any;
		m_twistSpan: any;
		m_limitSoftness: any;
		m_biasFactor: any;
		m_relaxationFactor: any;
		m_damping: any;
	}
	export class btConnectivityProcessor {
		constructor(); m_partIdA: number;
		m_triangleIndexA: number;
		m_triangleVerticesA: btVector3;
		m_triangleInfoMap: btTriangleInfoMap;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btTriangleCallback(): any;
	}
	export class btConstraintInfo1 {
		constructor(); m_numConstraintRows: number;
		nub: number;
	}
	export class btConstraintInfo2 {
		constructor(); fps: any;
		erp: any;
		m_J1linearAxis: any;
		m_J1angularAxis: any;
		m_J2linearAxis: any;
		m_J2angularAxis: any;
		rowskip: number;
		m_constraintError: any;
		cfm: any;
		m_lowerLimit: any;
		m_upperLimit: any;
		findex: any;
		m_numIterations: number;
		m_damping: any;
	}
	export class btConstraintRow {
		constructor(); m_normal: any;
		m_rhs: any;
		m_jacDiagInv: any;
		m_lowerLimit: any;
		m_upperLimit: any;
		m_accumImpulse: any;
	}
	export class btConstraintSetting {
		constructor(); m_tau: any;
		m_damping: any;
		m_impulseClamp: any;
	}
	export class btConstraintSolver {
		constructor(); prepareSolve(a?: any, b?: any): void;
		solveGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): any;
		allSolved(arg1?: btContactSolverInfo, arg2?: btIDebugDraw): void;
		reset(): void;
		getSolverType(): any;
	}
	export class btContactArray {
		constructor(); push_contact(point?: btVector3, normal?: btVector3, depth?: any, feature1?: number, feature2?: number): void;
		push_triangle_contacts(tricontact?: any, feature1?: number, feature2?: number): void;
		merge_contacts(contacts?: btContactArray, normal_contact_average?: boolean): void;
		merge_contacts_unique(contacts?: btContactArray): void;
		btAlignedObjectArray(): any;
		btAlignedObjectArray(otherArray?: btAlignedObjectArray): any;
		btAlignedObjectArray(): any;
		size(): number;
		at(n?: number): any;
		at(n?: number): any;
		clear(): void;
		pop_back(): void;
		resizeNoInitialize(newsize?: number): void;
		resize(newsize?: number, fillData?: any): void;
		expandNonInitializing(): any;
		expand(fillValue?: any): any;
		push_back(_Val?: any): void;
		capacity(): number;
		reserve(_Count?: number): void;
		quickSortInternal(CompareFunc?: any, lo?: number, hi?: number): void;
		quickSort(CompareFunc?: any): void;
		downHeap(pArr?: any, k?: number, n?: number, CompareFunc?: any): void;
		swap(index0?: number, index1?: number): void;
		heapSort(CompareFunc?: any): void;
		findBinarySearch(key?: any): number;
		findLinearSearch(key?: any): number;
		remove(key?: any): void;
		initializeFromBuffer(buffer?: void, size?: number, capacity?: number): void;
		copyFromArray(otherArray?: btAlignedObjectArray): void;
	}
	export class btContactConstraint {
		constructor(contactManifold?: btPersistentManifold, rbA?: btRigidBody, rbB?: btRigidBody); m_contactManifold: btPersistentManifold;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		setContactManifold(contactManifold?: btPersistentManifold): void;
		getContactManifold(): btPersistentManifold;
		getContactManifold(): btPersistentManifold;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		buildJacobian(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btContactSolverInfo { constructor(); }
	export class btContactSolverInfoData {
		constructor(); m_tau: any;
		m_damping: any;
		m_friction: any;
		m_timeStep: any;
		m_restitution: any;
		m_numIterations: number;
		m_maxErrorReduction: any;
		m_sor: any;
		m_erp: any;
		m_erp2: any;
		m_globalCfm: any;
		m_splitImpulse: number;
		m_splitImpulsePenetrationThreshold: any;
		m_splitImpulseTurnErp: any;
		m_linearSlop: any;
		m_warmstartingFactor: any;
		m_solverMode: number;
		m_restingContactRestitutionThreshold: number;
		m_minimumSolverBatchSize: number;
		m_maxGyroscopicForce: any;
		m_singleAxisRollingFrictionThreshold: any;
	}
	export class btContactSolverInfoDoubleData {
		constructor(); m_tau: any;
		m_damping: any;
		m_friction: any;
		m_timeStep: any;
		m_restitution: any;
		m_maxErrorReduction: any;
		m_sor: any;
		m_erp: any;
		m_erp2: any;
		m_globalCfm: any;
		m_splitImpulsePenetrationThreshold: any;
		m_splitImpulseTurnErp: any;
		m_linearSlop: any;
		m_warmstartingFactor: any;
		m_maxGyroscopicForce: any;
		m_singleAxisRollingFrictionThreshold: any;
		m_numIterations: number;
		m_solverMode: number;
		m_restingContactRestitutionThreshold: number;
		m_minimumSolverBatchSize: number;
		m_splitImpulse: number;
		m_padding: string;
	}
	export class btContactSolverInfoFloatData {
		constructor(); m_tau: number;
		m_damping: number;
		m_friction: number;
		m_timeStep: number;
		m_restitution: number;
		m_maxErrorReduction: number;
		m_sor: number;
		m_erp: number;
		m_erp2: number;
		m_globalCfm: number;
		m_splitImpulsePenetrationThreshold: number;
		m_splitImpulseTurnErp: number;
		m_linearSlop: number;
		m_warmstartingFactor: number;
		m_maxGyroscopicForce: number;
		m_singleAxisRollingFrictionThreshold: number;
		m_numIterations: number;
		m_solverMode: number;
		m_restingContactRestitutionThreshold: number;
		m_minimumSolverBatchSize: number;
		m_splitImpulse: number;
		m_padding: string;
	}
	export class btContinuousConvexCollision {
		constructor(shapeA?: btConvexShape, shapeB?: btConvexShape, simplexSolver?: any, penetrationDepthSolver?: btConvexPenetrationDepthSolver); m_simplexSolver: any;
		m_penetrationDepthSolver: btConvexPenetrationDepthSolver;
		m_convexA: btConvexShape;
		m_convexB1: btConvexShape;
		m_planeShape: btStaticPlaneShape;
		calcTimeOfImpact(fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any): boolean;
		btConvexCast(): any;
		computeClosestPoints(transA?: btTransform, transB?: btTransform, pointCollector?: btPointCollector): void;
	}
	export class btConvex2dConvex2dAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, simplexSolver?: any, pdSolver?: btConvexPenetrationDepthSolver, numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number); m_simplexSolver: any;
		m_pdSolver: btConvexPenetrationDepthSolver;
		m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_lowLevelOfDetail: boolean;
		m_numPerturbationIterations: number;
		m_minimumPointsPerturbationThreshold: number;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		setLowLevelOfDetail(useLowLevel?: boolean): void;
		getManifold(): btPersistentManifold;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btConvex2dShape {
		constructor(convexChildShape?: btConvexShape); m_childConvexShape: btConvexShape;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getChildShape(): btConvexShape;
		getChildShape(): btConvexShape;
		getName(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConvexCast {
		constructor(); calcTimeOfImpact(fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any): boolean;
	}
	export class btConvexConcaveCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_isSwapped: boolean;
		m_btConvexTriangleCallback: btConvexTriangleCallback;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		clearCache(): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btConvexConvexAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, simplexSolver?: any, pdSolver?: btConvexPenetrationDepthSolver, numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number); m_simplexSolver: any;
		m_pdSolver: btConvexPenetrationDepthSolver;
		m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_lowLevelOfDetail: boolean;
		m_numPerturbationIterations: number;
		m_minimumPointsPerturbationThreshold: number;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		setLowLevelOfDetail(useLowLevel?: boolean): void;
		getManifold(): btPersistentManifold;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btConvexHullComputer {
		constructor(); vertices: any;
		edges: any;
		faces: any;
		compute(coords?: number, stride?: number, count?: number, shrink?: any, shrinkClamp?: any): any;
		compute(coords?: any, stride?: number, count?: number, shrink?: any, shrinkClamp?: any): any;
		compute(coords?: void, doubleCoords?: boolean, stride?: number, count?: number, shrink?: any, shrinkClamp?: any): any;
	}
	export class btConvexHullInternal {
		constructor(); vertexList: any;
		scaling: btVector3;
		center: btVector3;
		vertexPool: any;
		edgePool: any;
		facePool: any;
		originalVertices: any;
		mergeStamp: number;
		minAxis: number;
		medAxis: number;
		maxAxis: number;
		usedEdgePairs: number;
		maxUsedEdgePairs: number;
		compute(coords?: void, doubleCoords?: boolean, stride?: number, count?: number): void;
		getCoordinates(v?: any): btVector3;
		shrink(amount?: any, clampAmount?: any): any;
		findMaxAngle(ccw?: boolean, start?: any, s?: any, rxs?: any, sxrxs?: any, minCot?: any): any;
		findEdgeForCoplanarFaces(c0?: any, c1?: any, e0?: any, e1?: any, stop0?: any, stop1?: any): void;
		newEdgePair(from?: any, to?: any): any;
		removeEdgePair(edge?: any): void;
		computeInternal(start?: number, end?: number, result?: any): void;
		mergeProjection(h0?: any, h1?: any, c0?: any, c1?: any): boolean;
		merge(h0?: any, h1?: any): void;
		toBtVector(v?: any): btVector3;
		getBtNormal(face?: any): btVector3;
		shiftFace(face?: any, amount?: any, stack?: any): boolean;
	}
	export class btConvexHullShape extends btCollisionShape {
		constructor(points?: any, numPoints?: number, stride?: number); m_unscaledPoints: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		addPoint(point?: btVector3, recalculateLocalAabb?: boolean): void;
		getUnscaledPoints(): btVector3;
		getUnscaledPoints(): btVector3;
		getPoints(): btVector3;
		getScaledPoint(i?: number): btVector3;
		getNumPoints(): number;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		getName(): any;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		btPolyhedralConvexAabbCachingShape(): any;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConvexHullShapeData {
		constructor(); m_convexInternalShapeData: btConvexInternalShapeData;
		m_unscaledPointsFloatPtr: btVector3FloatData;
		m_unscaledPointsDoublePtr: btVector3DoubleData;
		m_numUnscaledPoints: number;
		m_padding3: string;
	}
	export class btConvexInternalAabbCachingShape {
		constructor(); m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_isLocalAabbValid: boolean;
		setLocalScaling(scaling?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
		setCachedLocalAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getCachedLocalAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		btConvexInternalShape(): any;
	}
	export class btConvexInternalShape {
		constructor(); m_localScaling: btVector3;
		m_implicitShapeDimensions: btVector3;
		m_collisionMargin: any;
		m_padding: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConvexInternalShapeData {
		constructor(); m_collisionShapeData: btCollisionShapeData;
		m_localScaling: btVector3FloatData;
		m_implicitShapeDimensions: btVector3FloatData;
		m_collisionMargin: number;
		m_padding: number;
	}
	export class btConvexPenetrationDepthSolver {
		constructor(); calcPenDepth(simplexSolver?: any, convexA?: btConvexShape, convexB?: btConvexShape, transA?: btTransform, transB?: btTransform, v?: btVector3, pa?: btVector3, pb?: btVector3, debugDraw?: btIDebugDraw): boolean;
	}
	export class btConvexPlaneCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean, numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_isSwapped: boolean;
		m_numPerturbationIterations: number;
		m_minimumPointsPerturbationThreshold: number;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		collideSingleContact(perturbeRot?: btQuaternion, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btConvexPointCloudShape {
		constructor(points?: btVector3, numPoints?: number, localScaling?: btVector3, computeAabb?: boolean); m_unscaledPoints: btVector3;
		m_numPoints: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setPoints(points?: btVector3, numPoints?: number, computeAabb?: boolean, localScaling?: btVector3, a?: any, b?: any): void;
		getUnscaledPoints(): btVector3;
		getUnscaledPoints(): btVector3;
		getNumPoints(): number;
		getScaledPoint(index?: number): btVector3;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getName(): any;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		setLocalScaling(scaling?: btVector3): void;
		btPolyhedralConvexAabbCachingShape(): any;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConvexPolyhedron {
		constructor(); m_vertices: any;
		m_faces: any;
		m_uniqueEdges: any;
		m_localCenter: btVector3;
		m_extents: btVector3;
		m_radius: any;
		mC: btVector3;
		mE: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		initialize(): void;
		testContainment(): boolean;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
	}
	export class btConvexSeparatingDistanceUtil {
		constructor(boundingRadiusA?: any, boundingRadiusB?: any); m_ornA: btQuaternion;
		m_ornB: btQuaternion;
		m_posA: btVector3;
		m_posB: btVector3;
		m_separatingNormal: btVector3;
		m_boundingRadiusA: any;
		m_boundingRadiusB: any;
		m_separatingDistance: any;
		getConservativeSeparatingDistance(): any;
		updateSeparatingDistance(transA?: btTransform, transB?: btTransform): void;
		initSeparatingDistance(separatingVector?: btVector3, separatingDistance?: any, transA?: btTransform, transB?: btTransform): void;
	}
	export class btConvexShape {
		constructor(); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btConvexTriangleCallback {
		constructor(dispatcher?: btDispatcher, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_triangleCount: number;
		m_manifoldPtr: btPersistentManifold;
		m_convexBodyWrap: btCollisionObjectWrapper;
		m_triBodyWrap: btCollisionObjectWrapper;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		m_resultOut: btManifoldResult;
		m_dispatcher: btDispatcher;
		m_dispatchInfoPtr: btDispatcherInfo;
		m_collisionMarginTriangle: any;
		setTimeStepAndCounters(collisionMarginTriangle?: any, dispatchInfo?: btDispatcherInfo, convexBodyWrap?: btCollisionObjectWrapper, triBodyWrap?: btCollisionObjectWrapper, resultOut?: btManifoldResult): void;
		clearWrapperData(): void;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		clearCache(): void;
		getAabbMin(): btVector3;
		getAabbMax(): btVector3;
		btTriangleCallback(): any;
	}
	export class btConvexTriangleMeshShape extends btCollisionShape {
		constructor(meshInterface?: btStridingMeshInterface, calcAabb?: boolean); m_stridingMesh: btStridingMeshInterface;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getMeshInterface(): btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getName(): any;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculatePrincipalAxisTransform(principal?: btTransform, inertia?: btVector3, volume?: any): void;
		btPolyhedralConvexAabbCachingShape(): any;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCpuFeatureUtility { constructor(); }
	export class btCPUVertexBufferDescriptor {
		constructor(basePointer?: number, vertexOffset?: number, vertexStride?: number, normalOffset?: number, normalStride?: number); m_basePointer: any;
		m_hasVertexPositions: boolean;
		m_hasNormals: boolean;
		m_vertexOffset: number;
		m_vertexStride: number;
		m_normalOffset: number;
		m_normalStride: number;
		getBufferType(): any;
		getBasePointer(): any;
		btVertexBufferDescriptor(): any;
		btVertexBufferDescriptor(): any;
		hasVertexPositions(): boolean;
		hasNormals(): boolean;
		getVertexOffset(): number;
		getVertexStride(): number;
		getNormalOffset(): number;
		getNormalStride(): number;
	}
	export class btCylinderShape extends btCollisionShape {
		constructor(halfExtents?: btVector3); m_upAxis: number;
		m_localScaling: btVector3;
		m_implicitShapeDimensions: btVector3;
		m_collisionMargin: any;
		m_padding: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getHalfExtentsWithMargin(): btVector3;
		getHalfExtentsWithoutMargin(): btVector3;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		setMargin(collisionMargin?: any): void;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getUpAxis(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		getRadius(): any;
		setLocalScaling(scaling?: btVector3): void;
		getName(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCylinderShapeData {
		constructor(); m_convexInternalShapeData: btConvexInternalShapeData;
		m_upAxis: number;
		m_padding: string;
	}
	export class btCylinderShapeX extends btCollisionShape {
		constructor(halfExtents?: btVector3); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getName(): any;
		getRadius(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getHalfExtentsWithMargin(): btVector3;
		getHalfExtentsWithoutMargin(): btVector3;
		btCylinderShape(halfExtents?: btVector3): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setMargin(collisionMargin?: any): void;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getUpAxis(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btCylinderShapeZ extends btCollisionShape {
		constructor(halfExtents?: btVector3); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getName(): any;
		getRadius(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getHalfExtentsWithMargin(): btVector3;
		getHalfExtentsWithoutMargin(): btVector3;
		btCylinderShape(halfExtents?: btVector3): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setMargin(collisionMargin?: any): void;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getUpAxis(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setLocalScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btDantzigScratchMemory {
		constructor(); m_scratch: any;
		L: any;
		d: any;
		delta_w: any;
		delta_x: any;
		Dell: any;
		ell: any;
		Arows: any;
		p: any;
		C: any;
		state: any;
	}
	export class btDantzigSolver {
		constructor(); m_acceptableUpperLimitSolution: any;
		m_tempBuffer: any;
		m_A: any;
		m_b: any;
		m_x: any;
		m_lo: any;
		m_hi: any;
		m_dependencies: any;
		m_scratchMemory: btDantzigScratchMemory;
		solveMLCP(A?: any, b?: any, x?: any, lo?: any, hi?: any, limitDependency?: any, numIterations?: number, useSparsity?: boolean): boolean;
		btMLCPSolverInterface(): any;
	}
	export class btDbvt {
		constructor(arg1?: btDbvt); m_root: btDbvtNode;
		m_free: btDbvtNode;
		m_lkhd: number;
		m_leaves: number;
		m_opath: any;
		m_stkStack: any;
		m_rayTestStack: any;
		clear(): void;
		empty(): boolean;
		optimizeBottomUp(): void;
		optimizeTopDown(bu_treshold?: number): void;
		optimizeIncremental(passes?: number): void;
		insert(box?: any, data?: void): btDbvtNode;
		update(leaf?: btDbvtNode, lookahead?: number): void;
		update(leaf?: btDbvtNode, volume?: any): void;
		update(leaf?: btDbvtNode, volume?: any, velocity?: btVector3, margin?: any): boolean;
		update(leaf?: btDbvtNode, volume?: any, velocity?: btVector3): boolean;
		update(leaf?: btDbvtNode, volume?: any, margin?: any): boolean;
		remove(leaf?: btDbvtNode): void;
		write(iwriter?: any): void;
		clone(dest?: btDbvt, iclone?: any): void;
		collideTT(root0?: btDbvtNode, root1?: btDbvtNode, DBVT_IPOLICY?: any): any;
		collideTTpersistentStack(root0?: btDbvtNode, root1?: btDbvtNode, DBVT_IPOLICY?: any): any;
		collideTV(root?: btDbvtNode, volume?: any, DBVT_IPOLICY?: any): any;
		rayTestInternal(root?: btDbvtNode, rayFrom?: btVector3, rayTo?: btVector3, rayDirectionInverse?: btVector3, signs?: number, lambda_max?: any, aabbMin?: btVector3, aabbMax?: btVector3, DBVT_IPOLICY?: any): any;
	}
	export class btDbvtAabbMm {
		constructor(); mi: btVector3;
		mx: btVector3;
		Center(): any;
		Lengths(): any;
		Extents(): any;
		Mins(): any;
		Maxs(): any;
		Expand(e?: btVector3): any;
		SignedExpand(e?: btVector3): any;
		Contain(a?: btDbvtAabbMm): any;
		Classify(n?: btVector3, o?: any, s?: number): any;
		ProjectMinimum(v?: btVector3, signs?: any): any;
		tMins(): any;
		tMaxs(): any;
		AddSpan(d?: btVector3, smi?: any, smx?: any): any;
	}
	export class btDbvtBroadphase {
		constructor(paircache?: btOverlappingPairCache); m_sets: btDbvt;
		m_stageRoots: btDbvtProxy;
		m_paircache: btOverlappingPairCache;
		m_prediction: any;
		m_stageCurrent: number;
		m_fupdates: number;
		m_dupdates: number;
		m_cupdates: number;
		m_newpairs: number;
		m_fixedleft: number;
		m_updates_call: any;
		m_updates_done: any;
		m_updates_ratio: any;
		m_pid: number;
		m_cid: number;
		m_gid: number;
		m_releasepaircache: boolean;
		m_deferedcollide: boolean;
		m_needcleanup: boolean;
		collide(dispatcher?: btDispatcher): void;
		optimize(): void;
		createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		printStats(): void;
		resetPool(dispatcher?: btDispatcher): void;
		performDeferredRemoval(dispatcher?: btDispatcher): void;
		setVelocityPrediction(prediction?: any): void;
		getVelocityPrediction(): any;
		setAabbForceUpdate(absproxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, arg4?: btDispatcher): void;
		btBroadphaseInterface(): any;
	}
	export class btDbvtNode {
		constructor(); volume: any;
		parent: btDbvtNode;
		isleaf(): any;
		isinternal(): any;
	}
	export class btDbvtNodeEnumerator {
		constructor(); nodes: any;
		Process(n?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class btDbvtProxy {
		constructor(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number); leaf: btDbvtNode;
		links: btDbvtProxy;
		stage: number;
		m_clientObject: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_multiSapParentProxy: any;
		m_uniqueId: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getUid(): number;
		btBroadphaseProxy(): any;
		btBroadphaseProxy(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void): any;
	}
	export class btDbvtTreeCollider {
		constructor(p?: btDbvtBroadphase); pbp: btDbvtBroadphase;
		proxy: btDbvtProxy;
		Process(na?: btDbvtNode, nb?: btDbvtNode): void;
		Process(n?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class btDefaultCollisionConfiguration {
		constructor(constructionInfo?: btDefaultCollisionConstructionInfo); m_persistentManifoldPoolSize: number;
		m_persistentManifoldPool: btPoolAllocator;
		m_ownsPersistentManifoldPool: boolean;
		m_collisionAlgorithmPool: btPoolAllocator;
		m_ownsCollisionAlgorithmPool: boolean;
		m_simplexSolver: btVoronoiSimplexSolver;
		m_pdSolver: btConvexPenetrationDepthSolver;
		m_convexConvexCreateFunc: btCollisionAlgorithmCreateFunc;
		m_convexConcaveCreateFunc: btCollisionAlgorithmCreateFunc;
		m_swappedConvexConcaveCreateFunc: btCollisionAlgorithmCreateFunc;
		m_compoundCreateFunc: btCollisionAlgorithmCreateFunc;
		m_compoundCompoundCreateFunc: btCollisionAlgorithmCreateFunc;
		m_swappedCompoundCreateFunc: btCollisionAlgorithmCreateFunc;
		m_emptyCreateFunc: btCollisionAlgorithmCreateFunc;
		m_sphereSphereCF: btCollisionAlgorithmCreateFunc;
		m_sphereBoxCF: btCollisionAlgorithmCreateFunc;
		m_boxSphereCF: btCollisionAlgorithmCreateFunc;
		m_boxBoxCF: btCollisionAlgorithmCreateFunc;
		m_sphereTriangleCF: btCollisionAlgorithmCreateFunc;
		m_triangleSphereCF: btCollisionAlgorithmCreateFunc;
		m_planeConvexCF: btCollisionAlgorithmCreateFunc;
		m_convexPlaneCF: btCollisionAlgorithmCreateFunc;
		getPersistentManifoldPool(): btPoolAllocator;
		getCollisionAlgorithmPool(): btPoolAllocator;
		getSimplexSolver(): btVoronoiSimplexSolver;
		getCollisionAlgorithmCreateFunc(proxyType0?: number, proxyType1?: number): btCollisionAlgorithmCreateFunc;
		setConvexConvexMultipointIterations(numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number): void;
		setPlaneConvexMultipointIterations(numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number): void;
		btCollisionConfiguration(): any;
	}
	export class btDefaultCollisionConstructionInfo {
		constructor(); m_persistentManifoldPool: btPoolAllocator;
		m_collisionAlgorithmPool: btPoolAllocator;
		m_defaultMaxPersistentManifoldPoolSize: number;
		m_defaultMaxCollisionAlgorithmPoolSize: number;
		m_customCollisionAlgorithmMaxElementSize: number;
		m_useEpaPenetrationAlgorithm: number;
	}
	export class btDefaultMotionState {
		constructor(startTrans?: btTransform); m_graphicsWorldTrans: btTransform;
		m_centerOfMassOffset: btTransform;
		m_startWorldTrans: btTransform;
		m_userPointer: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getWorldTransform(centerOfMassWorldTrans?: btTransform): void;
		setWorldTransform(centerOfMassWorldTrans?: btTransform): void;
		btMotionState(): any;
	}
	export class btDefaultSerializer {
		constructor(totalSize?: number, buffer?: string); m_skipPointers: any;
		mTypes: any;
		mStructs: any;
		mTlens: any;
		mStructReverse: any;
		mTypeLookup: any;
		m_chunkP: any;
		m_nameMap: any;
		m_uniquePointers: any;
		m_uniqueIdGenerator: number;
		m_totalSize: number;
		m_buffer: any;
		m_ownsBuffer: boolean;
		m_currentSize: number;
		m_dna: any;
		m_dnaLength: number;
		m_serializationFlags: number;
		m_chunkPtrs: any;
		insertHeader(): void;
		writeHeader(buffer?: string): void;
		startSerialization(): void;
		finishSerialization(): void;
		getUniquePointer(oldPtr?: void): any;
		getBufferPointer(): any;
		getCurrentBufferSize(): number;
		finalizeChunk(chunk?: btChunk, structType?: string, chunkCode?: number, oldPtr?: void): void;
		internalAlloc(size?: any): any;
		allocate(size?: any, numElements?: number): btChunk;
		findNameForPointer(ptr?: void): any;
		registerNameForPointer(ptr?: void, name?: string): void;
		serializeName(name?: string): void;
		getSerializationFlags(): number;
		setSerializationFlags(flags?: number): void;
		getNumChunks(): number;
		getChunk(chunkIndex?: number): btChunk;
		btSerializer(): any;
		findPointer(oldPtr?: void): any;
		writeDNA(): void;
		getReverseType(type?: string): number;
		initDNA(bdnaOrg?: string, dnalen?: number): void;
	}
	export class btDefaultSoftBodySolver {
		constructor(); m_updateSolverConstants: boolean;
		m_softBodySet: any;
		m_numberOfPositionIterations: number;
		m_numberOfVelocityIterations: number;
		m_timeScale: number;
		getSolverType(): any;
		checkInitialized(): boolean;
		updateSoftBodies(): void;
		optimize(softBodies?: any, forceUpdate?: boolean): void;
		copyBackToSoftBodies(bMove?: boolean): void;
		solveConstraints(solverdt?: number): void;
		predictMotion(solverdt?: number): void;
		copySoftBodyToVertexBuffer(softBody?: any, vertexBuffer?: btVertexBufferDescriptor): void;
		processCollision(arg1?: btSoftBody, arg2?: btCollisionObjectWrapper): void;
		processCollision(arg1?: btSoftBody, arg2?: btSoftBody): void;
		btSoftBodySolver(): any;
		btSoftBodySolver(): any;
		processCollision(arg1?: btSoftBody, arg2?: btCollisionObjectWrapper): void;
		setNumberOfPositionIterations(iterations?: number): void;
		getNumberOfPositionIterations(): number;
		setNumberOfVelocityIterations(iterations?: number): void;
		getNumberOfVelocityIterations(): number;
		getTimeScale(): number;
	}
	export class btDefaultVehicleRaycaster {
		constructor(world?: btDynamicsWorld); m_dynamicsWorld: btDynamicsWorld;
		castRay(from?: btVector3, to?: btVector3, result?: btVehicleRaycasterResult): any;
		btVehicleRaycaster(): any;
	}
	export class btDiscreteCollisionDetectorInterface {
		constructor(); getClosestPoints(input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean): void;
	}
	export class btDiscreteDynamicsWorld {
		constructor(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration); m_sortedConstraints: any;
		m_solverIslandCallback: any;
		m_constraintSolver: btConstraintSolver;
		m_islandManager: btSimulationIslandManager;
		m_constraints: any;
		m_nonStaticRigidBodies: any;
		m_gravity: btVector3;
		m_localTime: any;
		m_fixedTimeStep: any;
		m_ownsIslandManager: boolean;
		m_ownsConstraintSolver: boolean;
		m_synchronizeAllMotionStates: boolean;
		m_applySpeculativeContactRestitution: boolean;
		m_actions: any;
		m_profileTimings: number;
		m_latencyMotionStateInterpolation: boolean;
		m_predictiveManifolds: any;
		m_internalTickCallback: any;
		m_internalPreTickCallback: any;
		m_worldUserInfo: any;
		m_solverInfo: btContactSolverInfo;
		m_collisionObjects: any;
		m_dispatcher1: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_broadphasePairCache: btBroadphaseInterface;
		m_debugDrawer: btIDebugDraw;
		m_forceUpdateAllAabbs: boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		stepSimulation(timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any): number;
		synchronizeMotionStates(): void;
		synchronizeSingleMotionState(body?: btRigidBody): void;
		addConstraint(constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean): void;
		removeConstraint(constraint?: btTypedConstraint): void;
		addAction(arg1?: btActionInterface): void;
		removeAction(arg1?: btActionInterface): void;
		getSimulationIslandManager(): btSimulationIslandManager;
		getSimulationIslandManager(): btSimulationIslandManager;
		getCollisionWorld(): btCollisionWorld;
		setGravity(gravity?: btVector3): void;
		getGravity(): btVector3;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		addRigidBody(body?: btRigidBody): void;
		addRigidBody(body?: btRigidBody, group?: number, mask?: number): void;
		removeRigidBody(body?: btRigidBody): void;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		debugDrawConstraint(constraint?: btTypedConstraint): void;
		debugDrawWorld(): void;
		setConstraintSolver(solver?: btConstraintSolver): void;
		getConstraintSolver(): btConstraintSolver;
		getNumConstraints(): number;
		getConstraint(index?: number): btTypedConstraint;
		getConstraint(index?: number): btTypedConstraint;
		getWorldType(): any;
		clearForces(): void;
		applyGravity(): void;
		setNumTasks(numTasks?: number): void;
		updateVehicles(timeStep?: any): void;
		addVehicle(vehicle?: btActionInterface): void;
		removeVehicle(vehicle?: btActionInterface): void;
		addCharacter(character?: btActionInterface): void;
		removeCharacter(character?: btActionInterface): void;
		setSynchronizeAllMotionStates(synchronizeAll?: boolean): void;
		getSynchronizeAllMotionStates(): boolean;
		setApplySpeculativeContactRestitution(enable?: boolean): void;
		getApplySpeculativeContactRestitution(): boolean;
		serialize(serializer?: btSerializer): void;
		setLatencyMotionStateInterpolation(latencyInterpolation?: boolean): void;
		getLatencyMotionStateInterpolation(): boolean;
		btDynamicsWorld(dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btDynamicsWorld(): any;
		setInternalTickCallback(cb?: any, worldUserInfo?: void, isPreTick?: boolean): void;
		setWorldUserInfo(worldUserInfo?: void): void;
		getWorldUserInfo(): any;
		getSolverInfo(): btContactSolverInfo;
		btCollisionWorld(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btCollisionWorld(): any;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		updateAabbs(): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		predictUnconstraintMotion(timeStep?: any): void;
		integrateTransforms(timeStep?: any): void;
		calculateSimulationIslands(): void;
		solveConstraints(solverInfo?: btContactSolverInfo): void;
		updateActivationState(timeStep?: any): void;
		updateActions(timeStep?: any): void;
		startProfiling(timeStep?: any): void;
		internalSingleStepSimulation(timeStep?: any): void;
		createPredictiveContacts(timeStep?: any): void;
		saveKinematicState(timeStep?: any): void;
		serializeRigidBodies(serializer?: btSerializer): void;
		serializeDynamicsWorldInfo(serializer?: btSerializer): void;
		serializeCollisionObjects(serializer?: btSerializer): void;
	}
	export class btDispatcher {
		constructor(); findAlgorithm(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, sharedManifold?: btPersistentManifold): btCollisionAlgorithm;
		getNewManifold(b0?: btCollisionObject, b1?: btCollisionObject): btPersistentManifold;
		releaseManifold(manifold?: btPersistentManifold): void;
		clearManifold(manifold?: btPersistentManifold): void;
		needsCollision(body0?: btCollisionObject, body1?: btCollisionObject): boolean;
		needsResponse(body0?: btCollisionObject, body1?: btCollisionObject): boolean;
		dispatchAllCollisionPairs(pairCache?: btOverlappingPairCache, dispatchInfo?: btDispatcherInfo, dispatcher?: btDispatcher): void;
		getNumManifolds(): number;
		getManifoldByIndexInternal(index?: number): btPersistentManifold;
		getInternalManifoldPointer(): btPersistentManifold;
		getInternalManifoldPool(): btPoolAllocator;
		getInternalManifoldPool(): btPoolAllocator;
		allocateCollisionAlgorithm(size?: number): any;
		freeCollisionAlgorithm(ptr?: void): void;
	}
	export class btDispatcherInfo {
		constructor(); m_timeStep: any;
		m_stepCount: number;
		m_dispatchFunc: number;
		m_timeOfImpact: any;
		m_useContinuous: boolean;
		m_debugDraw: btIDebugDraw;
		m_enableSatConvex: boolean;
		m_enableSPU: boolean;
		m_useEpa: boolean;
		m_allowedCcdPenetration: any;
		m_useConvexConservativeDistanceUtil: boolean;
		m_convexConservativeDistanceThreshold: any;
	}
	export class btDynamicsWorld {
		constructor(dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration); m_internalTickCallback: any;
		m_internalPreTickCallback: any;
		m_worldUserInfo: any;
		m_solverInfo: btContactSolverInfo;
		m_collisionObjects: any;
		m_dispatcher1: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_broadphasePairCache: btBroadphaseInterface;
		m_debugDrawer: btIDebugDraw;
		m_forceUpdateAllAabbs: boolean;
		stepSimulation(timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any): number;
		debugDrawWorld(): void;
		addConstraint(constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean): void;
		removeConstraint(constraint?: btTypedConstraint): void;
		addAction(action?: btActionInterface): void;
		removeAction(action?: btActionInterface): void;
		setGravity(gravity?: btVector3): void;
		getGravity(): btVector3;
		synchronizeMotionStates(): void;
		addRigidBody(body?: btRigidBody): void;
		addRigidBody(body?: btRigidBody, group?: number, mask?: number): void;
		removeRigidBody(body?: btRigidBody): void;
		setConstraintSolver(solver?: btConstraintSolver): void;
		getConstraintSolver(): btConstraintSolver;
		getNumConstraints(): number;
		getConstraint(index?: number): btTypedConstraint;
		getConstraint(index?: number): btTypedConstraint;
		getWorldType(): any;
		clearForces(): void;
		setInternalTickCallback(cb?: any, worldUserInfo?: void, isPreTick?: boolean): void;
		setWorldUserInfo(worldUserInfo?: void): void;
		getWorldUserInfo(): any;
		getSolverInfo(): btContactSolverInfo;
		addVehicle(vehicle?: btActionInterface): void;
		removeVehicle(vehicle?: btActionInterface): void;
		addCharacter(character?: btActionInterface): void;
		removeCharacter(character?: btActionInterface): void;
		btCollisionWorld(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btCollisionWorld(): any;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		updateAabbs(): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		serialize(serializer?: btSerializer): void;
	}
	export class btDynamicsWorldDoubleData {
		constructor(); m_solverInfo: btContactSolverInfoDoubleData;
		m_gravity: btVector3DoubleData;
	}
	export class btDynamicsWorldFloatData {
		constructor(); m_solverInfo: btContactSolverInfoFloatData;
		m_gravity: btVector3FloatData;
	}
	export class btEigen { constructor(); }
	export class btElement {
		constructor(); m_id: number;
		m_sz: number;
	}
	export class btEmptyAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo); ATTRIBUTE_ALIGNED: any;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btEmptyShape {
		constructor(); m_localScaling: btVector3;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		processAllTriangles(arg1?: btTriangleCallback, arg2?: btVector3, arg3?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btFace {
		constructor(); m_indices: any;
		m_plane: any;
	}
	export class btFixedConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btGeneric6DofSpring2Constraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotOrder?: any): any;
		btGeneric6DofSpring2Constraint(rbB?: btRigidBody, frameInB?: btTransform, rotOrder?: any): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor2;
		getTranslationalLimitMotor(): btTranslationalLimitMotor2;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		setAngularLowerLimitReversed(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimitReversed(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		setAngularUpperLimitReversed(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimitReversed(angularUpper?: btVector3): void;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		setLimitReversed(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		setRotationOrder(order?: any): void;
		getRotationOrder(): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		setBounce(index?: number, bounce?: any): void;
		enableMotor(index?: number, onOff?: boolean): void;
		setServo(index?: number, onOff?: boolean): void;
		setTargetVelocity(index?: number, velocity?: any): void;
		setServoTarget(index?: number, target?: any): void;
		setMaxMotorForce(index?: number, force?: any): void;
		enableSpring(index?: number, onOff?: boolean): void;
		setStiffness(index?: number, stiffness?: any, limitIfNeeded?: boolean): void;
		setDamping(index?: number, damping?: any, limitIfNeeded?: boolean): void;
		setEquilibriumPoint(): void;
		setEquilibriumPoint(index?: number): void;
		setEquilibriumPoint(index?: number, val?: any): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btGearConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, axisInA?: btVector3, axisInB?: btVector3, ratio?: any); m_axisInA: btVector3;
		m_axisInB: btVector3;
		m_useFrameA: boolean;
		m_ratio: any;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		setAxisA(axisA?: btVector3): void;
		setAxisB(axisB?: btVector3): void;
		setRatio(ratio?: any): void;
		getAxisA(): btVector3;
		getAxisB(): btVector3;
		getRatio(): any;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		buildJacobian(): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btGearConstraintDoubleData {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_axisInA: btVector3DoubleData;
		m_axisInB: btVector3DoubleData;
		m_ratio: any;
	}
	export class btGearConstraintFloatData {
		constructor(); m_typeConstraintData: btTypedConstraintFloatData;
		m_axisInA: btVector3FloatData;
		m_axisInB: btVector3FloatData;
		m_ratio: number;
		m_padding: string;
	}
	export class btGeneric6DofConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean); m_useSolveConstraintObsolete: boolean;
		m_objectType: number;
		m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_jacLinear: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_linearLimits: btTranslationalLimitMotor;
		m_angularLimits: btRotationalLimitMotor;
		m_timeStep: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_calculatedAxisAngleDiff: btVector3;
		m_calculatedAxis: btVector3;
		m_calculatedLinearDiff: btVector3;
		m_factA: any;
		m_factB: any;
		m_hasStaticBody: boolean;
		m_AnchorPos: btVector3;
		m_useLinearReferenceFrameA: boolean;
		m_useOffsetForConstraintFrame: boolean;
		m_flags: number;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): void;
		updateRHS(timeStep?: any): void;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		testAngularLimitMotor(axis_index?: number): boolean;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor;
		getTranslationalLimitMotor(): btTranslationalLimitMotor;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		calcAnchorPos(arg1?: any): void;
		get_limit_motor_info2(limot?: btRotationalLimitMotor, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number): number;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		setAngularLimits(info?: btConstraintInfo2, row_offset?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		setLinearLimits(info?: btConstraintInfo2, row?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		buildLinearJacobian(jacLinear?: btJacobianEntry, normalWorld?: btVector3, pivotAInW?: btVector3, pivotBInW?: btVector3): void;
		buildAngularJacobian(jacAngular?: btJacobianEntry, jointAxisW?: btVector3): void;
		calculateLinearInfo(): void;
		calculateAngleInfo(): void;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btGeneric6DofConstraintData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformFloatData;
		m_rbBFrame: btTransformFloatData;
		m_linearUpperLimit: btVector3FloatData;
		m_linearLowerLimit: btVector3FloatData;
		m_angularUpperLimit: btVector3FloatData;
		m_angularLowerLimit: btVector3FloatData;
		m_useLinearReferenceFrameA: number;
		m_useOffsetForConstraintFrame: number;
	}
	export class btGeneric6DofConstraintDoubleData2 {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_linearUpperLimit: btVector3DoubleData;
		m_linearLowerLimit: btVector3DoubleData;
		m_angularUpperLimit: btVector3DoubleData;
		m_angularLowerLimit: btVector3DoubleData;
		m_useLinearReferenceFrameA: number;
		m_useOffsetForConstraintFrame: number;
	}
	export class btGeneric6DofSpring2Constraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotOrder?: any); m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_jacLinear: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_linearLimits: btTranslationalLimitMotor2;
		m_angularLimits: btRotationalLimitMotor2;
		m_rotateOrder: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_calculatedAxisAngleDiff: btVector3;
		m_calculatedAxis: btVector3;
		m_calculatedLinearDiff: btVector3;
		m_factA: any;
		m_factB: any;
		m_hasStaticBody: boolean;
		m_flags: number;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor2;
		getTranslationalLimitMotor(): btTranslationalLimitMotor2;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		setAngularLowerLimitReversed(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimitReversed(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		setAngularUpperLimitReversed(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimitReversed(angularUpper?: btVector3): void;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		setLimitReversed(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		setRotationOrder(order?: any): void;
		getRotationOrder(): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		setBounce(index?: number, bounce?: any): void;
		enableMotor(index?: number, onOff?: boolean): void;
		setServo(index?: number, onOff?: boolean): void;
		setTargetVelocity(index?: number, velocity?: any): void;
		setServoTarget(index?: number, target?: any): void;
		setMaxMotorForce(index?: number, force?: any): void;
		enableSpring(index?: number, onOff?: boolean): void;
		setStiffness(index?: number, stiffness?: any, limitIfNeeded?: boolean): void;
		setDamping(index?: number, damping?: any, limitIfNeeded?: boolean): void;
		setEquilibriumPoint(): void;
		setEquilibriumPoint(index?: number): void;
		setEquilibriumPoint(index?: number, val?: any): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		setAngularLimits(info?: btConstraintInfo2, row_offset?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		setLinearLimits(info?: btConstraintInfo2, row?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		calculateLinearInfo(): void;
		calculateAngleInfo(): void;
		testAngularLimitMotor(axis_index?: number): void;
		calculateJacobi(limot?: btRotationalLimitMotor2, transA?: btTransform, transB?: btTransform, info?: btConstraintInfo2, srow?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number): void;
		get_limit_motor_info2(limot?: btRotationalLimitMotor2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number): number;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btGeneric6DofSpring2ConstraintData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformFloatData;
		m_rbBFrame: btTransformFloatData;
		m_linearUpperLimit: btVector3FloatData;
		m_linearLowerLimit: btVector3FloatData;
		m_linearBounce: btVector3FloatData;
		m_linearStopERP: btVector3FloatData;
		m_linearStopCFM: btVector3FloatData;
		m_linearMotorERP: btVector3FloatData;
		m_linearMotorCFM: btVector3FloatData;
		m_linearTargetVelocity: btVector3FloatData;
		m_linearMaxMotorForce: btVector3FloatData;
		m_linearServoTarget: btVector3FloatData;
		m_linearSpringStiffness: btVector3FloatData;
		m_linearSpringDamping: btVector3FloatData;
		m_linearEquilibriumPoint: btVector3FloatData;
		m_linearEnableMotor: string;
		m_linearServoMotor: string;
		m_linearEnableSpring: string;
		m_linearSpringStiffnessLimited: string;
		m_linearSpringDampingLimited: string;
		m_padding1: string;
		m_angularUpperLimit: btVector3FloatData;
		m_angularLowerLimit: btVector3FloatData;
		m_angularBounce: btVector3FloatData;
		m_angularStopERP: btVector3FloatData;
		m_angularStopCFM: btVector3FloatData;
		m_angularMotorERP: btVector3FloatData;
		m_angularMotorCFM: btVector3FloatData;
		m_angularTargetVelocity: btVector3FloatData;
		m_angularMaxMotorForce: btVector3FloatData;
		m_angularServoTarget: btVector3FloatData;
		m_angularSpringStiffness: btVector3FloatData;
		m_angularSpringDamping: btVector3FloatData;
		m_angularEquilibriumPoint: btVector3FloatData;
		m_angularEnableMotor: string;
		m_angularServoMotor: string;
		m_angularEnableSpring: string;
		m_angularSpringStiffnessLimited: string;
		m_angularSpringDampingLimited: string;
		m_rotateOrder: number;
	}
	export class btGeneric6DofSpring2ConstraintDoubleData2 {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_linearUpperLimit: btVector3DoubleData;
		m_linearLowerLimit: btVector3DoubleData;
		m_linearBounce: btVector3DoubleData;
		m_linearStopERP: btVector3DoubleData;
		m_linearStopCFM: btVector3DoubleData;
		m_linearMotorERP: btVector3DoubleData;
		m_linearMotorCFM: btVector3DoubleData;
		m_linearTargetVelocity: btVector3DoubleData;
		m_linearMaxMotorForce: btVector3DoubleData;
		m_linearServoTarget: btVector3DoubleData;
		m_linearSpringStiffness: btVector3DoubleData;
		m_linearSpringDamping: btVector3DoubleData;
		m_linearEquilibriumPoint: btVector3DoubleData;
		m_linearEnableMotor: string;
		m_linearServoMotor: string;
		m_linearEnableSpring: string;
		m_linearSpringStiffnessLimited: string;
		m_linearSpringDampingLimited: string;
		m_padding1: string;
		m_angularUpperLimit: btVector3DoubleData;
		m_angularLowerLimit: btVector3DoubleData;
		m_angularBounce: btVector3DoubleData;
		m_angularStopERP: btVector3DoubleData;
		m_angularStopCFM: btVector3DoubleData;
		m_angularMotorERP: btVector3DoubleData;
		m_angularMotorCFM: btVector3DoubleData;
		m_angularTargetVelocity: btVector3DoubleData;
		m_angularMaxMotorForce: btVector3DoubleData;
		m_angularServoTarget: btVector3DoubleData;
		m_angularSpringStiffness: btVector3DoubleData;
		m_angularSpringDamping: btVector3DoubleData;
		m_angularEquilibriumPoint: btVector3DoubleData;
		m_angularEnableMotor: string;
		m_angularServoMotor: string;
		m_angularEnableSpring: string;
		m_angularSpringStiffnessLimited: string;
		m_angularSpringDampingLimited: string;
		m_rotateOrder: number;
	}
	export class btGeneric6DofSpringConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean); m_springEnabled: boolean;
		m_equilibriumPoint: any;
		m_springStiffness: any;
		m_springDamping: any;
		m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_jacLinear: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_linearLimits: btTranslationalLimitMotor;
		m_angularLimits: btRotationalLimitMotor;
		m_timeStep: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_calculatedAxisAngleDiff: btVector3;
		m_calculatedAxis: btVector3;
		m_calculatedLinearDiff: btVector3;
		m_factA: any;
		m_factB: any;
		m_hasStaticBody: boolean;
		m_AnchorPos: btVector3;
		m_useLinearReferenceFrameA: boolean;
		m_useOffsetForConstraintFrame: boolean;
		m_flags: number;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		enableSpring(index?: number, onOff?: boolean): void;
		setStiffness(index?: number, stiffness?: any): void;
		setDamping(index?: number, damping?: any): void;
		setEquilibriumPoint(): void;
		setEquilibriumPoint(index?: number): void;
		setEquilibriumPoint(index?: number, val?: any): void;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		getInfo2(info?: btConstraintInfo2): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btGeneric6DofConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): any;
		btGeneric6DofConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameB?: boolean): any;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): void;
		updateRHS(timeStep?: any): void;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		testAngularLimitMotor(axis_index?: number): boolean;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor;
		getTranslationalLimitMotor(): btTranslationalLimitMotor;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		calcAnchorPos(arg1?: any): void;
		get_limit_motor_info2(limot?: btRotationalLimitMotor, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number): number;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		init(): void;
		internalUpdateSprings(info?: btConstraintInfo2): void;
		setAngularLimits(info?: btConstraintInfo2, row_offset?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		setLinearLimits(info?: btConstraintInfo2, row?: number, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): number;
		buildLinearJacobian(jacLinear?: btJacobianEntry, normalWorld?: btVector3, pivotAInW?: btVector3, pivotBInW?: btVector3): void;
		buildAngularJacobian(jacAngular?: btJacobianEntry, jointAxisW?: btVector3): void;
		calculateLinearInfo(): void;
		calculateAngleInfo(): void;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btGeneric6DofSpringConstraintData {
		constructor(); m_6dofData: btGeneric6DofConstraintData;
		m_springEnabled: number;
		m_equilibriumPoint: number;
		m_springStiffness: number;
		m_springDamping: number;
	}
	export class btGeneric6DofSpringConstraintDoubleData2 {
		constructor(); m_6dofData: btGeneric6DofConstraintDoubleData2;
		m_springEnabled: number;
		m_equilibriumPoint: any;
		m_springStiffness: any;
		m_springDamping: any;
	}
	export class btGenericMemoryPool {
		constructor(element_size?: any, element_count?: any); m_pool: any;
		m_free_nodes: any;
		m_allocated_sizes: any;
		m_allocated_count: any;
		m_free_nodes_count: any;
		m_element_size: any;
		m_max_element_count: any;
		init_pool(element_size?: any, element_count?: any): void;
		end_pool(): void;
		get_pool_capacity(): any;
		gem_element_size(): any;
		get_max_element_count(): any;
		get_allocated_count(): any;
		get_free_positions_count(): any;
		get_element_data(element_index?: any): any;
		allocate(size_bytes?: any): any;
		freeMemory(pointer?: void): boolean;
		allocate_from_free_nodes(num_elements?: any): any;
		allocate_from_pool(num_elements?: any): any;
	}
	export class btGenericPoolAllocator {
		constructor(pool_element_size?: any, pool_element_count?: any); m_pools: btGenericMemoryPool;
		m_pool_count: any;
		m_pool_element_size: any;
		m_pool_element_count: any;
		get_pool_capacity(): any;
		allocate(size_bytes?: any): any;
		freeMemory(pointer?: void): boolean;
		push_new_pool(): btGenericMemoryPool;
		failback_alloc(size_bytes?: any): any;
		failback_free(pointer?: void): boolean;
	}
	export class btGEN_Link {
		constructor(next?: btGEN_Link, prev?: btGEN_Link); m_next: btGEN_Link;
		m_prev: btGEN_Link;
		getNext(): btGEN_Link;
		getPrev(): btGEN_Link;
		isHead(): boolean;
		isTail(): boolean;
		insertBefore(link?: btGEN_Link): void;
		insertAfter(link?: btGEN_Link): void;
		remove(): void;
	}
	export class btGEN_List {
		constructor(); m_head: btGEN_Link;
		m_tail: btGEN_Link;
		getHead(): btGEN_Link;
		getTail(): btGEN_Link;
		addHead(link?: btGEN_Link): void;
		addTail(link?: btGEN_Link): void;
	}
	export class btGeometryUtil { constructor(); }
	export class btGhostObject {
		constructor(); m_overlappingObjects: any;
		m_worldTransform: btTransform;
		m_interpolationWorldTransform: btTransform;
		m_interpolationLinearVelocity: btVector3;
		m_interpolationAngularVelocity: btVector3;
		m_anisotropicFriction: btVector3;
		m_hasAnisotropicFriction: number;
		m_contactProcessingThreshold: any;
		m_broadphaseHandle: btBroadphaseProxy;
		m_collisionShape: btCollisionShape;
		m_extensionPointer: any;
		m_rootCollisionShape: btCollisionShape;
		m_collisionFlags: number;
		m_islandTag1: number;
		m_companionId: number;
		m_activationState1: number;
		m_deactivationTime: any;
		m_friction: any;
		m_restitution: any;
		m_rollingFriction: any;
		m_internalType: number;
		m_userObjectPointer: any;
		m_userIndex: number;
		m_hitFraction: any;
		m_ccdSweptSphereRadius: any;
		m_ccdMotionThreshold: any;
		m_checkCollideWith: number;
		m_objectsWithoutCollisionCheck: any;
		m_updateRevision: number;
		convexSweepTest(castShape?: btConvexShape, convexFromWorld?: btTransform, convexToWorld?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		addOverlappingObjectInternal(otherProxy?: btBroadphaseProxy, thisProxy?: btBroadphaseProxy): void;
		removeOverlappingObjectInternal(otherProxy?: btBroadphaseProxy, dispatcher?: btDispatcher, thisProxy?: btBroadphaseProxy): void;
		getNumOverlappingObjects(): number;
		getOverlappingObject(index?: number): btCollisionObject;
		getOverlappingObject(index?: number): btCollisionObject;
		getOverlappingPairs(): any;
		getOverlappingPairs(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		btCollisionObject(): any;
		btCollisionObject(): any;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleObject(serializer?: btSerializer): void;
	}
	export class btGhostPairCallback {
		constructor(); addOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		removeOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher): any;
		removeOverlappingPairsContainingProxy(arg1?: btBroadphaseProxy, arg2?: btDispatcher): void;
		btOverlappingPairCallback(): any;
	}
	export class btGImpactBvh {
		constructor(primitive_manager?: btPrimitiveManagerBase); m_box_tree: btBvhTree;
		m_primitive_manager: btPrimitiveManagerBase;
		update: void;
		buildSet: void;
		boxQuery: boolean;
		boxQueryTrans: boolean;
		rayQuery: boolean;
		hasHierarchy: boolean;
		isTrimesh: boolean;
		getNodeCount: number;
		isLeafNode: boolean;
		getNodeData: number;
		getNodeBound: void;
		setNodeBound: void;
		getLeftNode: number;
		getRightNode: number;
		getEscapeNodeIndex: number;
		getNodeTriangle: void;
		get_node_pointer: any;
		find_collision: void;
		getGlobalBox(): btAABB;
		setPrimitiveManager(primitive_manager?: btPrimitiveManagerBase): void;
		getPrimitiveManager(): btPrimitiveManagerBase;
		refit(): void;
	}
	export class btGImpactCollisionAlgorithm {
		constructor(); m_convex_algorithm: btCollisionAlgorithm;
		m_manifoldPtr: btPersistentManifold;
		m_resultOut: btManifoldResult;
		m_dispatchInfo: btDispatcherInfo;
		m_triface0: number;
		m_part0: number;
		m_triface1: number;
		m_part1: number;
		m_dispatcher: btDispatcher;
		collide_gjk_triangles: void;
		collide_sat_triangles: void;
		shape_vs_shape_collision: void;
		convex_vs_convex_collision: void;
		gimpact_vs_gimpact_find_pairs: void;
		gimpact_vs_shape_find_pairs: void;
		gimpacttrimeshpart_vs_plane_collision: void;
		btGImpactCollisionAlgorithm: any;
		processCollision: void;
		calculateTimeOfImpact: any;
		getAllContactManifolds: void;
		internalGetResultOut: btManifoldResult;
		gimpact_vs_gimpact: void;
		gimpact_vs_shape: void;
		gimpact_vs_compoundshape: void;
		gimpact_vs_concave: void;
		setFace0: void;
		getFace0: number;
		setFace1: void;
		getFace1: number;
		setPart0: void;
		getPart0: number;
		setPart1: void;
		getPart1: number;
		registerAlgorithm: void;
		newContactManifold(body0?: btCollisionObject, body1?: btCollisionObject): btPersistentManifold;
		destroyConvexAlgorithm(): void;
		destroyContactManifolds(): void;
		clearCache(): void;
		getLastManifold(): btPersistentManifold;
		checkManifold(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): void;
		newAlgorithm(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): btCollisionAlgorithm;
		checkConvexAlgorithm(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): void;
		addContactPoint(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, point?: btVector3, normal?: btVector3, distance?: any): void;
	}
	export class btGImpactCompoundShape {
		constructor(children_has_transform?: boolean); m_primitive_manager: any;
		m_childTransforms: any;
		m_childShapes: any;
		m_localAABB: btAABB;
		m_needs_update: boolean;
		localScaling: btVector3;
		m_box_set: any;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		childrenHasTransform(): boolean;
		getPrimitiveManager(): btPrimitiveManagerBase;
		getCompoundPrimitiveManager(): any;
		getNumChildShapes(): number;
		addChildShape(localTransform?: btTransform, shape?: btCollisionShape): void;
		addChildShape(shape?: btCollisionShape): void;
		getChildShape(index?: number): btCollisionShape;
		getChildShape(index?: number): btCollisionShape;
		getChildAabb(child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getChildTransform(index?: number): btTransform;
		setChildTransform(index?: number, transform?: btTransform): void;
		needsRetrieveTriangles(): boolean;
		needsRetrieveTetrahedrons(): boolean;
		getBulletTriangle(prim_index?: number, triangle?: btTriangleShapeEx): void;
		getBulletTetrahedron(prim_index?: number, tetrahedron?: btTetrahedronShapeEx): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getGImpactShapeType(): any;
		btGImpactShapeInterface(): any;
		updateBound(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		postUpdate(): void;
		getLocalBox(): btAABB;
		getShapeType(): number;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		setMargin(margin?: any): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: any): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTrianglesRay(arg1?: btTriangleCallback, arg2?: btVector3, arg3?: btVector3): void;
		getBoxSet(): any;
		hasBoxSet(): boolean;
		lockChildShapes(): void;
		unlockChildShapes(): void;
		getPrimitiveTriangle(index?: number, triangle?: btPrimitiveTriangle): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btGImpactMeshShape {
		constructor(meshInterface?: btStridingMeshInterface); m_mesh_parts: any;
		m_localAABB: btAABB;
		m_needs_update: boolean;
		localScaling: btVector3;
		m_box_set: any;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		m_meshInterface: btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		getMeshPartCount(): number;
		getMeshPart(index?: number): btGImpactMeshShapePart;
		getMeshPart(index?: number): btGImpactMeshShapePart;
		setLocalScaling(scaling?: btVector3): void;
		setMargin(margin?: any): void;
		postUpdate(): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getPrimitiveManager(): btPrimitiveManagerBase;
		getNumChildShapes(): number;
		childrenHasTransform(): boolean;
		needsRetrieveTriangles(): boolean;
		needsRetrieveTetrahedrons(): boolean;
		getBulletTriangle(prim_index?: number, triangle?: btTriangleShapeEx): void;
		getBulletTetrahedron(prim_index?: number, tetrahedron?: btTetrahedronShapeEx): void;
		lockChildShapes(): void;
		unlockChildShapes(): void;
		getChildAabb(child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getChildShape(index?: number): btCollisionShape;
		getChildShape(index?: number): btCollisionShape;
		getChildTransform(index?: number): btTransform;
		setChildTransform(index?: number, transform?: btTransform): void;
		getGImpactShapeType(): any;
		getName(): any;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: any): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTrianglesRay(callback?: btTriangleCallback, rayFrom?: btVector3, rayTo?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		btGImpactShapeInterface(): any;
		updateBound(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalBox(): btAABB;
		getShapeType(): number;
		getLocalScaling(): btVector3;
		getBoxSet(): any;
		hasBoxSet(): boolean;
		getPrimitiveTriangle(index?: number, triangle?: btPrimitiveTriangle): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
		buildMeshParts(meshInterface?: btStridingMeshInterface): void;
		calcLocalAABB(): void;
	}
	export class btGImpactMeshShapeData {
		constructor(); m_collisionShapeData: btCollisionShapeData;
		m_meshInterface: btStridingMeshInterfaceData;
		m_localScaling: btVector3FloatData;
		m_collisionMargin: number;
		m_gimpactSubType: number;
	}
	export class btGImpactMeshShapePart {
		constructor(meshInterface?: btStridingMeshInterface, part?: number); m_primitive_manager: any;
		m_localAABB: btAABB;
		m_needs_update: boolean;
		localScaling: btVector3;
		m_box_set: any;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		childrenHasTransform(): boolean;
		lockChildShapes(): void;
		unlockChildShapes(): void;
		getNumChildShapes(): number;
		getChildShape(index?: number): btCollisionShape;
		getChildShape(index?: number): btCollisionShape;
		getChildTransform(index?: number): btTransform;
		setChildTransform(index?: number, transform?: btTransform): void;
		getPrimitiveManager(): btPrimitiveManagerBase;
		getTrimeshPrimitiveManager(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getGImpactShapeType(): any;
		needsRetrieveTriangles(): boolean;
		needsRetrieveTetrahedrons(): boolean;
		getBulletTriangle(prim_index?: number, triangle?: btTriangleShapeEx): void;
		getBulletTetrahedron(prim_index?: number, tetrahedron?: btTetrahedronShapeEx): void;
		getVertexCount(): number;
		getVertex(vertex_index?: number, vertex?: btVector3): void;
		setMargin(margin?: any): void;
		getMargin(): any;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getPart(): number;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTrianglesRay(callback?: btTriangleCallback, rayFrom?: btVector3, rayTo?: btVector3): void;
		btGImpactShapeInterface(): any;
		updateBound(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		postUpdate(): void;
		getLocalBox(): btAABB;
		getShapeType(): number;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: any): void;
		getBoxSet(): any;
		hasBoxSet(): boolean;
		getPrimitiveTriangle(index?: number, triangle?: btPrimitiveTriangle): void;
		getChildAabb(child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btGImpactQuantizedBvh {
		constructor(primitive_manager?: btPrimitiveManagerBase); m_box_tree: btQuantizedBvhTree;
		m_primitive_manager: btPrimitiveManagerBase;
		update: void;
		buildSet: void;
		boxQuery: boolean;
		boxQueryTrans: boolean;
		rayQuery: boolean;
		hasHierarchy: boolean;
		isTrimesh: boolean;
		getNodeCount: number;
		isLeafNode: boolean;
		getNodeData: number;
		getNodeBound: void;
		setNodeBound: void;
		getLeftNode: number;
		getRightNode: number;
		getEscapeNodeIndex: number;
		getNodeTriangle: void;
		get_node_pointer: any;
		find_collision: void;
		getGlobalBox(): btAABB;
		setPrimitiveManager(primitive_manager?: btPrimitiveManagerBase): void;
		getPrimitiveManager(): btPrimitiveManagerBase;
		refit(): void;
	}
	export class btGImpactShapeInterface {
		constructor(); m_localAABB: btAABB;
		m_needs_update: boolean;
		localScaling: btVector3;
		m_box_set: any;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		updateBound(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		postUpdate(): void;
		getLocalBox(): btAABB;
		getShapeType(): number;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		setMargin(margin?: any): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, resultCallback?: any): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTrianglesRay(arg1?: btTriangleCallback, arg2?: btVector3, arg3?: btVector3): void;
		getGImpactShapeType(): any;
		getBoxSet(): any;
		hasBoxSet(): boolean;
		getPrimitiveManager(): btPrimitiveManagerBase;
		getNumChildShapes(): number;
		childrenHasTransform(): boolean;
		needsRetrieveTriangles(): boolean;
		needsRetrieveTetrahedrons(): boolean;
		getBulletTriangle(prim_index?: number, triangle?: btTriangleShapeEx): void;
		getBulletTetrahedron(prim_index?: number, tetrahedron?: btTetrahedronShapeEx): void;
		lockChildShapes(): void;
		unlockChildShapes(): void;
		getPrimitiveTriangle(index?: number, triangle?: btPrimitiveTriangle): void;
		getChildAabb(child_index?: number, t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getChildShape(index?: number): btCollisionShape;
		getChildShape(index?: number): btCollisionShape;
		getChildTransform(index?: number): btTransform;
		setChildTransform(index?: number, transform?: btTransform): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
		calcLocalAABB(): void;
	} export class btGImpactTriangleCallback {
		constructor();
		algorithm: btGImpactCollisionAlgorithm;
		body0Wrap: btCollisionObjectWrapper;
		body1Wrap: btCollisionObjectWrapper;
		gimpactshape0: btGImpactShapeInterface;
		swapped: boolean;
		margin: any;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btTriangleCallback(): any;
	}
	export class btGjkCollisionDescription {
		constructor();
		m_firstDir: btVector3;
		m_maxGjkIterations: number;
		m_maximumDistanceSquared: any;
		m_gjkRelError2: any;
	} export class btGjkConvexCast {
		constructor(convexA?: btConvexShape, convexB?: btConvexShape, simplexSolver?: any);
		m_simplexSolver: any;
		m_convexA: btConvexShape;
		m_convexB: btConvexShape;
		calcTimeOfImpact(fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any): boolean;
		btConvexCast(): any;
	} export class btGjkEpaPenetrationDepthSolver {
		constructor();
		calcPenDepth(simplexSolver?: any, pConvexA?: btConvexShape, pConvexB?: btConvexShape, transformA?: btTransform, transformB?: btTransform, v?: btVector3, wWitnessOnA?: btVector3, wWitnessOnB?: btVector3, debugDraw?: btIDebugDraw): boolean;
		btConvexPenetrationDepthSolver(): any;
	} export class btGjkEpaSolver2 {
		constructor();
	}
	export class btGjkEpaSolver3 {
		constructor();
	} export class btGjkPairDetector {
		constructor(objectA?: btConvexShape, objectB?: btConvexShape, shapeTypeA?: number, shapeTypeB?: number, marginA?: any, marginB?: any, simplexSolver?: any, penetrationDepthSolver?: btConvexPenetrationDepthSolver); m_lastUsedMethod: number;
		m_curIter: number;
		m_degenerateSimplex: number;
		m_catchDegeneracies: number;
		m_fixContactNormalDirection: number;
		m_cachedSeparatingAxis: btVector3;
		m_penetrationDepthSolver: btConvexPenetrationDepthSolver;
		m_simplexSolver: any;
		m_minkowskiA: btConvexShape;
		m_minkowskiB: btConvexShape;
		m_shapeTypeA: number;
		m_shapeTypeB: number;
		m_marginA: any;
		m_marginB: any;
		m_ignoreMargin: boolean;
		m_cachedSeparatingDistance: any;
		getClosestPoints(input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean): void;
		getClosestPointsNonVirtual(input?: any, output?: any, debugDraw?: btIDebugDraw): void;
		setMinkowskiA(minkA?: btConvexShape): void;
		setMinkowskiB(minkB?: btConvexShape): void;
		setCachedSeperatingAxis(seperatingAxis?: btVector3): void;
		getCachedSeparatingAxis(): btVector3;
		getCachedSeparatingDistance(): any;
		setPenetrationDepthSolver(penetrationDepthSolver?: btConvexPenetrationDepthSolver): void;
		setIgnoreMargin(ignoreMargin?: boolean): void;
		btDiscreteCollisionDetectorInterface(): any;
	}
	export class btHashedOverlappingPairCache {
		constructor(); m_hashTable: any;
		m_next: any;
		m_ghostPairCallback: btOverlappingPairCallback;
		m_overlappingPairArray: any;
		m_overlapFilterCallback: btOverlapFilterCallback;
		m_blockedForChanges: boolean;
		removeOverlappingPairsContainingProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		removeOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher): any;
		needsBroadphaseCollision(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		addOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		cleanProxyFromPairs(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		processAllOverlappingPairs(arg1?: btOverlapCallback, dispatcher?: btDispatcher): void;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArray(): any;
		getOverlappingPairArray(): any;
		cleanOverlappingPair(pair?: btBroadphasePair, dispatcher?: btDispatcher): void;
		findPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		GetCount(): number;
		getOverlapFilterCallback(): btOverlapFilterCallback;
		setOverlapFilterCallback(callback?: btOverlapFilterCallback): void;
		getNumOverlappingPairs(): number;
		btOverlappingPairCache(): any;
		btOverlappingPairCallback(): any;
		internalAddPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		growTables(): void;
		equalsPair(pair?: btBroadphasePair, proxyId1?: number, proxyId2?: number): boolean;
		getHash(proxyId1?: number, proxyId2?: number): number;
		internalFindPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, hash?: number): btBroadphasePair;
		hasDeferredRemoval(): boolean;
		setInternalGhostPairCallback(ghostPairCallback?: btOverlappingPairCallback): void;
		sortOverlappingPairs(dispatcher?: btDispatcher): void;
	}
	export class btHashedSimplePairCache {
		constructor(); m_hashTable: any;
		m_next: any;
		m_overlappingPairArray: any;
		m_blockedForChanges: boolean;
		removeAllPairs(): void;
		removeOverlappingPair(indexA?: number, indexB?: number): any;
		addOverlappingPair(indexA?: number, indexB?: number): btSimplePair;
		getOverlappingPairArrayPtr(): btSimplePair;
		getOverlappingPairArrayPtr(): btSimplePair;
		getOverlappingPairArray(): any;
		getOverlappingPairArray(): any;
		findPair(indexA?: number, indexB?: number): btSimplePair;
		GetCount(): number;
		getNumOverlappingPairs(): number;
		internalAddPair(indexA?: number, indexB?: number): btSimplePair;
		growTables(): void;
		equalsPair(pair?: btSimplePair, indexA?: number, indexB?: number): boolean;
		getHash(indexA?: number, indexB?: number): number;
		internalFindPair(proxyIdA?: number, proxyIdB?: number, hash?: number): btSimplePair;
	}
	export class btHashInt {
		constructor(uid?: number); m_uid: number;
		getUid1(): number;
		setUid1(uid?: number): void;
		equals(other?: btHashInt): boolean;
		getHash(): number;
	}
	export class btHashKey {
		constructor(uid?: number); m_uid: number;
		getUid1(): number;
		equals(other?: any): boolean;
		getHash(): number;
	}
	export class btHashKeyPtr {
		constructor(uid?: number); m_uid: number;
		getUid1(): number;
		equals(other?: any): boolean;
		getHash(): number;
	}
	export class btHashMap {
		constructor(); m_hashTable: any;
		m_next: any;
		m_valueArray: any;
		m_keyArray: any;
		insert(key?: any, value?: any): void;
		remove(key?: any): void;
		size(): number;
		getAtIndex(index?: number): any;
		getAtIndex(index?: number): any;
		find(key?: any): any;
		find(key?: any): any;
		findIndex(key?: any): number;
		clear(): void;
		growTables(arg1?: any): void;
	}
	export class btHashPtr {
		constructor(ptr?: void); getPointer(): any;
		equals(other?: btHashPtr): boolean;
		getHash(): number;
	}
	export class btHashString {
		constructor(name?: string); m_string: any;
		m_hash: number;
		getHash(): number;
		portableStringCompare(src?: string, dst?: string): number;
		equals(other?: btHashString): boolean;
	}
	export class btHeightfieldTerrainShape {
		constructor(heightStickWidth?: number, heightStickLength?: number, heightfieldData?: void, heightScale?: any, minHeight?: any, maxHeight?: any, upAxis?: number, heightDataType?: any, flipQuadEdges?: boolean); m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_localOrigin: btVector3;
		m_heightStickWidth: number;
		m_heightStickLength: number;
		m_minHeight: any;
		m_maxHeight: any;
		m_width: any;
		m_length: any;
		m_heightScale: any;
		m_heightDataType: any;
		m_flipQuadEdges: boolean;
		m_useDiamondSubdivision: boolean;
		m_useZigzagSubdivision: boolean;
		m_upAxis: number;
		m_localScaling: btVector3;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setUseDiamondSubdivision(useDiamondSubdivision?: boolean): void;
		setUseZigzagSubdivision(useZigzagSubdivision?: boolean): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
		getRawHeightFieldValue(x?: number, y?: number): any;
		quantizeWithClamp(out?: number, point?: btVector3, isMax?: number): void;
		getVertex(x?: number, y?: number, vertex?: btVector3): void;
		initialize(heightStickWidth?: number, heightStickLength?: number, heightfieldData?: void, heightScale?: any, minHeight?: any, maxHeight?: any, upAxis?: number, heightDataType?: any, flipQuadEdges?: boolean): void;
	}
	export class btHinge2Constraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, anchor?: btVector3, axis1?: btVector3, axis2?: btVector3); m_anchor: btVector3;
		m_axis1: btVector3;
		m_axis2: btVector3;
		m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_jacLinear: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_linearLimits: btTranslationalLimitMotor2;
		m_angularLimits: btRotationalLimitMotor2;
		m_rotateOrder: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_calculatedAxisAngleDiff: btVector3;
		m_calculatedAxis: btVector3;
		m_calculatedLinearDiff: btVector3;
		m_factA: any;
		m_factB: any;
		m_hasStaticBody: boolean;
		m_flags: number;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAnchor(): btVector3;
		getAnchor2(): btVector3;
		getAxis1(): btVector3;
		getAxis2(): btVector3;
		getAngle1(): any;
		getAngle2(): any;
		setUpperLimit(ang1max?: any): void;
		setLowerLimit(ang1min?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btGeneric6DofSpring2Constraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotOrder?: any): any;
		btGeneric6DofSpring2Constraint(rbB?: btRigidBody, frameInB?: btTransform, rotOrder?: any): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor2;
		getTranslationalLimitMotor(): btTranslationalLimitMotor2;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		setAngularLowerLimitReversed(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimitReversed(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		setAngularUpperLimitReversed(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimitReversed(angularUpper?: btVector3): void;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		setLimitReversed(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		setRotationOrder(order?: any): void;
		getRotationOrder(): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		setBounce(index?: number, bounce?: any): void;
		enableMotor(index?: number, onOff?: boolean): void;
		setServo(index?: number, onOff?: boolean): void;
		setTargetVelocity(index?: number, velocity?: any): void;
		setServoTarget(index?: number, target?: any): void;
		setMaxMotorForce(index?: number, force?: any): void;
		enableSpring(index?: number, onOff?: boolean): void;
		setStiffness(index?: number, stiffness?: any, limitIfNeeded?: boolean): void;
		setDamping(index?: number, damping?: any, limitIfNeeded?: boolean): void;
		setEquilibriumPoint(): void;
		setEquilibriumPoint(index?: number): void;
		setEquilibriumPoint(index?: number, val?: any): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btHingeAccumulatedAngleConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3, axisInA?: btVector3, axisInB?: btVector3, useReferenceFrameA?: boolean); m_accumulatedAngle: any;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAccumulatedHingeAngle(): any;
		setAccumulatedHingeAngle(accAngle?: any): void;
		getInfo1(info?: btConstraintInfo1): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btHingeConstraint(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3, axisInA?: btVector3, axisInB?: btVector3, useReferenceFrameA?: boolean): any;
		btHingeConstraint(rbA?: btRigidBody, pivotInA?: btVector3, axisInA?: btVector3, useReferenceFrameA?: boolean): any;
		btHingeConstraint(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform, useReferenceFrameA?: boolean): any;
		btHingeConstraint(rbA?: btRigidBody, rbAFrame?: btTransform, useReferenceFrameA?: boolean): any;
		buildJacobian(): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		getInfo2Internal(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		getInfo2InternalUsingFrameOffset(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		updateRHS(timeStep?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setAngularOnly(angularOnly?: boolean): void;
		enableAngularMotor(enableMotor?: boolean, targetVelocity?: any, maxMotorImpulse?: any): void;
		enableMotor(enableMotor?: boolean): void;
		setMaxMotorImpulse(maxMotorImpulse?: any): void;
		setMotorTarget(qAinB?: btQuaternion, dt?: any): void;
		setMotorTarget(targetAngle?: any, dt?: any): void;
		setLimit(low?: any, high?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any): void;
		setAxis(axisInA?: btVector3): void;
		hasLimit(): boolean;
		getLowerLimit(): any;
		getUpperLimit(): any;
		getHingeAngle(): any;
		getHingeAngle(transA?: btTransform, transB?: btTransform): any;
		testLimit(transA?: btTransform, transB?: btTransform): void;
		getAFrame(): btTransform;
		getBFrame(): btTransform;
		getAFrame(): btTransform;
		getBFrame(): btTransform;
		getSolveLimit(): number;
		getLimitSign(): any;
		getAngularOnly(): boolean;
		getEnableAngularMotor(): boolean;
		getMotorTargetVelosity(): any;
		getMaxMotorImpulse(): any;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btHingeConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3, axisInA?: btVector3, axisInB?: btVector3, useReferenceFrameA?: boolean); m_jac: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_rbAFrame: btTransform;
		m_rbBFrame: btTransform;
		m_motorTargetVelocity: any;
		m_maxMotorImpulse: any;
		m_limit: btAngularLimit;
		m_kHinge: any;
		m_accLimitImpulse: any;
		m_hingeAngle: any;
		m_referenceSign: any;
		m_angularOnly: boolean;
		m_enableAngularMotor: boolean;
		m_useSolveConstraintObsolete: boolean;
		m_useOffsetForConstraintFrame: boolean;
		m_useReferenceFrameA: boolean;
		m_accMotorImpulse: any;
		m_flags: number;
		m_normalCFM: any;
		m_normalERP: any;
		m_stopCFM: any;
		m_stopERP: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		getInfo2Internal(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		getInfo2InternalUsingFrameOffset(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, angVelA?: btVector3, angVelB?: btVector3): void;
		updateRHS(timeStep?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setAngularOnly(angularOnly?: boolean): void;
		enableAngularMotor(enableMotor?: boolean, targetVelocity?: any, maxMotorImpulse?: any): void;
		enableMotor(enableMotor?: boolean): void;
		setMaxMotorImpulse(maxMotorImpulse?: any): void;
		setMotorTarget(qAinB?: btQuaternion, dt?: any): void;
		setMotorTarget(targetAngle?: any, dt?: any): void;
		setLimit(low?: any, high?: any, _softness?: any, _biasFactor?: any, _relaxationFactor?: any): void;
		setAxis(axisInA?: btVector3): void;
		hasLimit(): boolean;
		getLowerLimit(): any;
		getUpperLimit(): any;
		getHingeAngle(): any;
		getHingeAngle(transA?: btTransform, transB?: btTransform): any;
		testLimit(transA?: btTransform, transB?: btTransform): void;
		getAFrame(): btTransform;
		getBFrame(): btTransform;
		getAFrame(): btTransform;
		getBFrame(): btTransform;
		getSolveLimit(): number;
		getLimitSign(): any;
		getAngularOnly(): boolean;
		getEnableAngularMotor(): boolean;
		getMotorTargetVelosity(): any;
		getMaxMotorImpulse(): any;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btHingeConstraintDoubleData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_useReferenceFrameA: number;
		m_angularOnly: number;
		m_enableAngularMotor: number;
		m_motorTargetVelocity: number;
		m_maxMotorImpulse: number;
		m_lowerLimit: number;
		m_upperLimit: number;
		m_limitSoftness: number;
		m_biasFactor: number;
		m_relaxationFactor: number;
	}
	export class btHingeConstraintDoubleData2 {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_useReferenceFrameA: number;
		m_angularOnly: number;
		m_enableAngularMotor: number;
		m_motorTargetVelocity: any;
		m_maxMotorImpulse: any;
		m_lowerLimit: any;
		m_upperLimit: any;
		m_limitSoftness: any;
		m_biasFactor: any;
		m_relaxationFactor: any;
		m_padding1: string;
	}
	export class btHingeConstraintFloatData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformFloatData;
		m_rbBFrame: btTransformFloatData;
		m_useReferenceFrameA: number;
		m_angularOnly: number;
		m_enableAngularMotor: number;
		m_motorTargetVelocity: number;
		m_maxMotorImpulse: number;
		m_lowerLimit: number;
		m_upperLimit: number;
		m_limitSoftness: number;
		m_biasFactor: number;
		m_relaxationFactor: number;
	}
	export class btHullTriangle {
		constructor(a?: number, b?: number, c?: number); n: any;
		id: number;
		vmax: number;
		rise: any;
		x: number;
		y: number;
		z: number;
		neib(a?: number, b?: number): any;
		int3(): any;
		int3(_x?: number, _y?: number, _z?: number): any;
	}
	export class btIDebugDraw {
		constructor(); getDefaultColors(): any;
		setDefaultColors(arg1?: any): void;
		drawLine(from?: btVector3, to?: btVector3, color?: btVector3): void;
		drawLine(from?: btVector3, to?: btVector3, fromColor?: btVector3, toColor?: btVector3): void;
		drawSphere(radius?: any, transform?: btTransform, color?: btVector3): void;
		drawSphere(p?: btVector3, radius?: any, color?: btVector3): void;
		drawTriangle(v0?: btVector3, v1?: btVector3, v2?: btVector3, arg4?: btVector3, arg5?: btVector3, arg6?: btVector3, color?: btVector3, alpha?: any): void;
		drawTriangle(v0?: btVector3, v1?: btVector3, v2?: btVector3, color?: btVector3, btScalar?: any): void;
		drawContactPoint(PointOnB?: btVector3, normalOnB?: btVector3, distance?: any, lifeTime?: number, color?: btVector3): void;
		reportErrorWarning(warningString?: string): void;
		draw3dText(location?: btVector3, textString?: string): void;
		setDebugMode(debugMode?: number): void;
		getDebugMode(): number;
		drawAabb(from?: btVector3, to?: btVector3, color?: btVector3): void;
		drawTransform(transform?: btTransform, orthoLen?: any): void;
		drawArc(center?: btVector3, normal?: btVector3, axis?: btVector3, radiusA?: any, radiusB?: any, minAngle?: any, maxAngle?: any, color?: btVector3, drawSect?: boolean, stepDegrees?: any): void;
		drawSpherePatch(center?: btVector3, up?: btVector3, axis?: btVector3, radius?: any, minTh?: any, maxTh?: any, minPs?: any, maxPs?: any, color?: btVector3, stepDegrees?: any): void;
		drawBox(bbMin?: btVector3, bbMax?: btVector3, color?: btVector3): void;
		drawBox(bbMin?: btVector3, bbMax?: btVector3, trans?: btTransform, color?: btVector3): void;
		drawCapsule(radius?: any, halfHeight?: any, upAxis?: number, transform?: btTransform, color?: btVector3): void;
		drawCylinder(radius?: any, halfHeight?: any, upAxis?: number, transform?: btTransform, color?: btVector3): void;
		drawCone(radius?: any, height?: any, upAxis?: number, transform?: btTransform, color?: btVector3): void;
		drawPlane(planeNormal?: btVector3, planeConst?: any, transform?: btTransform, color?: btVector3): void;
		flushLines(): void;
	}
	export class btIndexedMesh {
		constructor(); m_numTriangles: number;
		m_triangleIndexBase: any;
		m_triangleIndexStride: number;
		m_numVertices: number;
		m_vertexBase: any;
		m_vertexStride: number;
		m_indexType: any;
		m_vertexType: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btInfMaskConverter { constructor(mask?: number); }
	export class btInternalEdge {
		constructor(); m_face0: number;
		m_face1: number;
	}
	export class btInternalTriangleIndexCallback {
		constructor(); internalProcessTriangleIndex(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
	}
	export class btInternalVertexPair {
		constructor(v0?: number, v1?: number); m_v0: number;
		m_v1: number;
		getHash(): number;
		equals(other?: btInternalVertexPair): boolean;
	}
	export class btIntIndexData {
		constructor(); m_value: number;
	}
	export class btIntSortPredicate { constructor(); }
	export class btJacobianEntry {
		constructor(world2A?: btMatrix3x3, world2B?: btMatrix3x3, rel_pos1?: btVector3, rel_pos2?: btVector3, jointAxis?: btVector3, inertiaInvA?: btVector3, massInvA?: any, inertiaInvB?: btVector3, massInvB?: any); m_linearJointAxis: btVector3;
		m_aJ: btVector3;
		m_bJ: btVector3;
		m_0MinvJt: btVector3;
		m_1MinvJt: btVector3;
		m_Adiag: any;
		getDiagonal(): any;
		getNonDiagonal(jacB?: btJacobianEntry, massInvA?: any): any;
		getNonDiagonal(jacB?: btJacobianEntry, massInvA?: any, massInvB?: any): any;
		getRelativeVelocity(linvelA?: btVector3, angvelA?: btVector3, linvelB?: btVector3, angvelB?: btVector3): any;
	}
	export class btJointFeedback {
		constructor(); m_appliedForceBodyA: btVector3;
		m_appliedTorqueBodyA: btVector3;
		m_appliedForceBodyB: btVector3;
		m_appliedTorqueBodyB: btVector3;
	}
	export class btJointNode {
		constructor(); jointIndex: number;
		otherBodyIndex: number;
		nextJointNodeIndex: number;
		constraintRowIndex: number;
	}
	export class btKinematicCharacterController {
		constructor(ghostObject?: btPairCachingGhostObject, convexShape?: btConvexShape, stepHeight?: any, upAxis?: number); m_halfHeight: any;
		m_ghostObject: btPairCachingGhostObject;
		m_convexShape: btConvexShape;
		m_verticalVelocity: any;
		m_verticalOffset: any;
		m_fallSpeed: any;
		m_jumpSpeed: any;
		m_maxJumpHeight: any;
		m_maxSlopeRadians: any;
		m_maxSlopeCosine: any;
		m_gravity: any;
		m_turnAngle: any;
		m_stepHeight: any;
		m_addedMargin: any;
		m_walkDirection: btVector3;
		m_normalizedDirection: btVector3;
		m_currentPosition: btVector3;
		m_currentStepOffset: any;
		m_targetPosition: btVector3;
		m_manifoldArray: any;
		m_touchingContact: boolean;
		m_touchingNormal: btVector3;
		m_wasOnGround: boolean;
		m_wasJumping: boolean;
		m_useGhostObjectSweepTest: boolean;
		m_useWalkDirection: boolean;
		m_velocityTimeInterval: any;
		m_upAxis: number;
		m_interpolateUp: boolean;
		full_drop: boolean;
		bounce_fix: boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		updateAction(collisionWorld?: btCollisionWorld, deltaTime?: any): void;
		debugDraw(debugDrawer?: btIDebugDraw): void;
		setUpAxis(axis?: number): void;
		setWalkDirection(walkDirection?: btVector3): void;
		setVelocityForTimeInterval(velocity?: btVector3, timeInterval?: any): void;
		reset(collisionWorld?: btCollisionWorld): void;
		warp(origin?: btVector3): void;
		preStep(collisionWorld?: btCollisionWorld): void;
		playerStep(collisionWorld?: btCollisionWorld, dt?: any): void;
		setFallSpeed(fallSpeed?: any): void;
		setJumpSpeed(jumpSpeed?: any): void;
		setMaxJumpHeight(maxJumpHeight?: any): void;
		canJump(): boolean;
		jump(): void;
		setGravity(gravity?: any): void;
		getGravity(): any;
		setMaxSlope(slopeRadians?: any): void;
		getMaxSlope(): any;
		getGhostObject(): btPairCachingGhostObject;
		setUseGhostSweepTest(useGhostObjectSweepTest?: boolean): void;
		onGround(): boolean;
		setUpInterpolate(value?: boolean): void;
		btCharacterControllerInterface(): any;
		btCharacterControllerInterface(): any;
		btActionInterface(): any;
		computeReflectionDirection(direction?: btVector3, normal?: btVector3): btVector3;
		parallelComponent(direction?: btVector3, normal?: btVector3): btVector3;
		perpindicularComponent(direction?: btVector3, normal?: btVector3): btVector3;
		recoverFromPenetration(collisionWorld?: btCollisionWorld): boolean;
		stepUp(collisionWorld?: btCollisionWorld): void;
		updateTargetPositionBasedOnCollision(hit_normal?: btVector3, tangentMag?: any): void;
		stepForwardAndStrafe(collisionWorld?: btCollisionWorld, walkMove?: btVector3): void;
		stepDown(collisionWorld?: btCollisionWorld, dt?: any): void;
	}
	export class btKinematicClosestNotMeConvexResultCallback {
		constructor(me?: btCollisionObject, up?: btVector3, minSlopeDot?: any); m_me: btCollisionObject;
		m_up: btVector3;
		m_minSlopeDot: any;
		addSingleResult(convexResult?: any, normalInWorldSpace?: boolean): any;
		ClosestConvexResultCallback(convexFromWorld?: btVector3, convexToWorld?: btVector3): any;
		ConvexResultCallback(): any;
		ConvexResultCallback(): any;
		hasHit(): boolean;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
	}
	export class btKinematicClosestNotMeRayResultCallback {
		constructor(me?: btCollisionObject); m_me: btCollisionObject;
		addSingleResult(rayResult?: any, normalInWorldSpace?: boolean): any;
		ClosestRayResultCallback(rayFromWorld?: btVector3, rayToWorld?: btVector3): any;
		RayResultCallback(): any;
		hasHit(): boolean;
		RayResultCallback(): any;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
	}
	export class btLCP {
		constructor(_n?: number, _nskip?: number, _nub?: number, _Adata?: any, _x?: any, _b?: any, _w?: any, _lo?: any, _hi?: any, l?: any, _d?: any, _Dell?: any, _ell?: any, _tmp?: any, _state?: boolean, _findex?: number, p?: number, c?: number, Arows?: any); m_n: number;
		m_nskip: number;
		m_nub: number;
		m_nC: number;
		m_nN: number;
		m_A: any;
		m_x: any;
		m_b: any;
		m_w: any;
		m_lo: any;
		m_hi: any;
		m_L: any;
		m_d: any;
		m_Dell: any;
		m_ell: any;
		m_tmp: any;
		m_state: any;
		m_findex: any;
		m_p: any;
		m_C: any;
		getNub(): number;
		transfer_i_to_C(i?: number): void;
		transfer_i_to_N(i?: number): void;
		transfer_i_from_N_to_C(i?: number): void;
		transfer_i_from_C_to_N(i?: number, scratch?: any): void;
		numC(): number;
		numN(): number;
		indexC(i?: number): number;
		indexN(i?: number): number;
		Aii(i?: number): any;
		AiC_times_qC(i?: number, q?: any): any;
		AiN_times_qN(i?: number, q?: any): any;
		pN_equals_ANC_times_qC(p?: any, q?: any): void;
		pN_plusequals_ANi(p?: any, i?: number, sign?: number): void;
		pC_plusequals_s_times_qC(p?: any, s?: any, q?: any): void;
		pN_plusequals_s_times_qN(p?: any, s?: any, q?: any): void;
		solve1(a?: any, i?: number, dir?: number, only_transfer?: number): void;
		unpermute(): void;
	}
	export class btLemkeAlgorithm {
		constructor(M_?: any, q_?: any, DEBUGLEVEL_?: number); m_M: any;
		m_q: any;
		steps: number;
		DEBUGLEVEL: number;
		info: number;
		getInfo(): number;
		getSteps(arg1?: any): number;
		setSystem(M_?: any, q_?: any): void;
		solve(maxloops?: number): any;
		findLexicographicMinimum(A?: any, pivotColIndex?: number): number;
		LexicographicPositive(v?: any): boolean;
		GaussJordanEliminationStep(A?: any, pivotRowIndex?: number, pivotColumnIndex?: number, basis?: any): void;
		greaterZero(vector?: any): boolean;
		validBasis(basis?: any): boolean;
	}
	export class btLemkeSolver {
		constructor(); m_maxValue: any;
		m_debugLevel: number;
		m_maxLoops: number;
		m_useLoHighBounds: boolean;
		solveMLCP(A?: any, b?: any, x?: any, lo?: any, hi?: any, limitDependency?: any, numIterations?: number, useSparsity?: boolean): boolean;
		btMLCPSolverInterface(): any;
	}
	export class btManifoldPoint {
		constructor(pointA?: btVector3, pointB?: btVector3, normal?: btVector3, distance?: any); m_localPointA: btVector3;
		m_localPointB: btVector3;
		m_positionWorldOnB: btVector3;
		m_positionWorldOnA: btVector3;
		m_normalWorldOnB: btVector3;
		m_distance1: any;
		m_combinedFriction: any;
		m_combinedRollingFriction: any;
		m_combinedRestitution: any;
		m_partId0: number;
		m_partId1: number;
		m_index0: number;
		m_index1: number;
		m_userPersistentData: any;
		m_lateralFrictionInitialized: boolean;
		m_appliedImpulse: any;
		m_appliedImpulseLateral1: any;
		m_appliedImpulseLateral2: any;
		m_contactMotion1: any;
		m_contactMotion2: any;
		m_contactCFM1: any;
		m_contactCFM2: any;
		m_lifeTime: number;
		m_lateralFrictionDir1: btVector3;
		m_lateralFrictionDir2: btVector3;
		getDistance(): any;
		getLifeTime(): number;
		getPositionWorldOnA(): btVector3;
		getPositionWorldOnB(): btVector3;
		setDistance(dist?: any): void;
		getAppliedImpulse(): any;
	}
	export class btManifoldResult {
		constructor(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper); m_manifoldPtr: btPersistentManifold;
		m_body0Wrap: btCollisionObjectWrapper;
		m_body1Wrap: btCollisionObjectWrapper;
		m_partId0: number;
		m_partId1: number;
		m_index0: number;
		m_index1: number;
		setPersistentManifold(manifoldPtr?: btPersistentManifold): void;
		getPersistentManifold(): btPersistentManifold;
		getPersistentManifold(): btPersistentManifold;
		setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any): void;
		refreshContactPoints(): void;
		getBody0Wrap(): btCollisionObjectWrapper;
		getBody1Wrap(): btCollisionObjectWrapper;
		setBody0Wrap(obj0Wrap?: btCollisionObjectWrapper): void;
		setBody1Wrap(obj1Wrap?: btCollisionObjectWrapper): void;
		getBody0Internal(): btCollisionObject;
		getBody1Internal(): btCollisionObject;
		Result(): any;
	}
	export class btMaterial {
		constructor(fric?: any, rest?: any); m_friction: any;
		m_restitution: any;
		pad: number;
	}
	export class btMaterialProperties {
		constructor(); m_numMaterials: number;
		m_materialBase: any;
		m_materialStride: number;
		m_materialType: any;
		m_numTriangles: number;
		m_triangleMaterialsBase: any;
		m_triangleMaterialStride: number;
		m_triangleType: any;
	}
	export class btMatrix3x3 {
		constructor(xx?: any, xy?: any, xz?: any, yx?: any, yy?: any, yz?: any, zx?: any, zy?: any, zz?: any); m_el: btVector3;
		getColumn(i?: number): btVector3;
		getRow(i?: number): btVector3;
		setFromOpenGLSubMatrix(m?: any): void;
		setValue(xx?: any, xy?: any, xz?: any, yx?: any, yy?: any, yz?: any, zx?: any, zy?: any, zz?: any): void;
		setRotation(q?: btQuaternion): void;
		setEulerYPR(yaw?: any, pitch?: any, roll?: any): void;
		setEulerZYX(eulerX?: any, eulerY?: any, eulerZ?: any): void;
		setIdentity(): void;
		getOpenGLSubMatrix(m?: any): void;
		getRotation(q?: btQuaternion): void;
		getEulerYPR(yaw?: any, pitch?: any, roll?: any): void;
		getEulerZYX(yaw?: any, pitch?: any, roll?: any, solution_number?: number): void;
		scaled(s?: btVector3): btMatrix3x3;
		determinant(): any;
		adjoint(): btMatrix3x3;
		absolute(): btMatrix3x3;
		transpose(): btMatrix3x3;
		inverse(): btMatrix3x3;
		solve33(b?: btVector3): btVector3;
		transposeTimes(m?: btMatrix3x3): btMatrix3x3;
		timesTranspose(m?: btMatrix3x3): btMatrix3x3;
		tdotx(v?: btVector3): any;
		tdoty(v?: btVector3): any;
		tdotz(v?: btVector3): any;
		diagonalize(rot?: btMatrix3x3, threshold?: any, maxSteps?: number): void;
		cofac(r1?: number, c1?: number, r2?: number, c2?: number): any;
		serialize(dataOut?: any): void;
		serializeFloat(dataOut?: btMatrix3x3FloatData): void;
		deSerialize(dataIn?: any): void;
		deSerializeFloat(dataIn?: btMatrix3x3FloatData): void;
		deSerializeDouble(dataIn?: btMatrix3x3DoubleData): void;
	}
	export class btMatrix3x3DoubleData {
		constructor(); m_el: btVector3DoubleData;
	}
	export class btMatrix3x3FloatData {
		constructor(); m_el: btVector3FloatData;
	}
	export class btMatrixX {
		constructor(rows?: number, cols?: number); m_rows: number;
		m_cols: number;
		m_operations: number;
		m_resizeOperations: number;
		m_setElemOperations: number;
		m_storage: any;
		m_rowNonZeroElements1: any;
		getBufferPointerWritable(): any;
		getBufferPointer(): any;
		resize(rows?: number, cols?: number): void;
		cols(): number;
		rows(): number;
		addElem(row?: number, col?: number, val?: any): void;
		setElem(row?: number, col?: number, val?: any): void;
		mulElem(row?: number, col?: number, val?: any): void;
		copyLowerToUpperTriangle(): void;
		setZero(): void;
		setIdentity(): void;
		printMatrix(msg?: string): void;
		rowComputeNonZeroElements(): void;
		transpose(): btMatrixX;
		multiplyAdd2_p8r(B?: any, C?: any, numRows?: number, numRowsOther?: number, row?: number, col?: number): void;
		multiply2_p8r(B?: any, C?: any, numRows?: number, numRowsOther?: number, row?: number, col?: number): void;
		setSubMatrix(rowstart?: number, colstart?: number, rowend?: number, colend?: number, value?: any): void;
		setSubMatrix(rowstart?: number, colstart?: number, rowend?: number, colend?: number, block?: btMatrixX): void;
		setSubMatrix(rowstart?: number, colstart?: number, rowend?: number, colend?: number, block?: any): void;
		negative(): btMatrixX;
	}
	export class btMeshPartData {
		constructor(); m_vertices3f: btVector3FloatData;
		m_vertices3d: btVector3DoubleData;
		m_indices32: btIntIndexData;
		m_3indices16: btShortIntIndexTripletData;
		m_3indices8: btCharIndexTripletData;
		m_indices16: btShortIntIndexData;
		m_numTriangles: number;
		m_numVertices: number;
	}
	export class btMinkowskiPenetrationDepthSolver {
		constructor(); calcPenDepth(simplexSolver?: any, convexA?: btConvexShape, convexB?: btConvexShape, transA?: btTransform, transB?: btTransform, v?: btVector3, pa?: btVector3, pb?: btVector3, debugDraw?: btIDebugDraw): boolean;
		btConvexPenetrationDepthSolver(): any;
	}
	export class btMinkowskiSumShape {
		constructor(shapeA?: btConvexShape, shapeB?: btConvexShape); m_transA: btTransform;
		m_transB: btTransform;
		m_shapeA: btConvexShape;
		m_shapeB: btConvexShape;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setTransformA(transA?: btTransform): void;
		setTransformB(transB?: btTransform): void;
		getTransformA(): btTransform;
		GetTransformB(): btTransform;
		getMargin(): any;
		getShapeA(): btConvexShape;
		getShapeB(): btConvexShape;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btMLCPSolver {
		constructor(solver?: btMLCPSolverInterface); m_A: any;
		m_b: any;
		m_x: any;
		m_lo: any;
		m_hi: any;
		m_bSplit: any;
		m_xSplit: any;
		m_bSplit1: any;
		m_xSplit2: any;
		m_limitDependencies: any;
		m_allConstraintPtrArray: any;
		m_solver: btMLCPSolverInterface;
		m_fallback: number;
		m_cfm: any;
		m_tmpSolverBodyPool: any;
		m_tmpSolverContactConstraintPool: any;
		m_tmpSolverNonContactConstraintPool: any;
		m_tmpSolverContactFrictionConstraintPool: any;
		m_tmpSolverContactRollingFrictionConstraintPool: any;
		m_orderTmpConstraintPool: any;
		m_orderNonContactConstraintPool: any;
		m_orderFrictionConstraintPool: any;
		m_tmpConstraintSizesPool: any;
		m_maxOverrideNumSolverIterations: number;
		m_fixedBodyId: number;
		m_resolveSingleConstraintRowGeneric: any;
		m_resolveSingleConstraintRowLowerLimit: any;
		m_btSeed2: number;
		setMLCPSolver(solver?: btMLCPSolverInterface): void;
		getNumFallbacks(): number;
		setNumFallbacks(num?: number): void;
		getCfm(): any;
		setCfm(cfm?: any): void;
		getSolverType(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btSequentialImpulseConstraintSolver(): any;
		btSequentialImpulseConstraintSolver(): any;
		solveGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): any;
		reset(): void;
		btRand2(): number;
		btRandInt2(n?: number): number;
		setRandSeed(seed?: number): void;
		getRandSeed(): number;
		getActiveConstraintRowSolverGeneric(): any;
		setConstraintRowSolverGeneric(rowSolver?: any): void;
		getActiveConstraintRowSolverLowerLimit(): any;
		setConstraintRowSolverLowerLimit(rowSolver?: any): void;
		getScalarConstraintRowSolverGeneric(): any;
		getSSE2ConstraintRowSolverGeneric(): any;
		getSSE4_1ConstraintRowSolverGeneric(): any;
		getScalarConstraintRowSolverLowerLimit(): any;
		getSSE2ConstraintRowSolverLowerLimit(): any;
		getSSE4_1ConstraintRowSolverLowerLimit(): any;
		btConstraintSolver(): any;
		prepareSolve(a?: any, b?: any): void;
		allSolved(arg1?: btContactSolverInfo, arg2?: btIDebugDraw): void;
		solveGroupCacheFriendlySetup(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		solveGroupCacheFriendlyIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		createMLCP(infoGlobal?: btContactSolverInfo): void;
		createMLCPFast(infoGlobal?: btContactSolverInfo): void;
		solveMLCP(infoGlobal?: btContactSolverInfo): boolean;
		setupFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		setupRollingFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		addFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		addRollingFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		setupContactConstraint(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, rel_pos1?: btVector3, rel_pos2?: btVector3): void;
		setFrictionConstraintImpulse(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo): void;
		restitutionCurve(rel_vel?: any, restitution?: any): any;
		convertContacts(manifoldPtr?: btPersistentManifold, numManifolds?: number, infoGlobal?: btContactSolverInfo): void;
		convertContact(manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo): void;
		resolveSplitPenetrationSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		resolveSplitPenetrationImpulseCacheFriendly(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		getOrInitSolverBody(body?: btCollisionObject, timeStep?: any): number;
		initSolverBody(solverBody?: btSolverBody, collisionObject?: btCollisionObject, timeStep?: any): void;
		resolveSingleConstraintRowGeneric(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowGenericSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimit(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimitSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		solveGroupCacheFriendlySplitImpulseIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): void;
		solveGroupCacheFriendlyFinish(bodies?: btCollisionObject, numBodies?: number, infoGlobal?: btContactSolverInfo): any;
		solveSingleIteration(iteration?: number, bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
	}
	export class btMLCPSolverInterface {
		constructor(); solveMLCP(A?: any, b?: any, x?: any, lo?: any, hi?: any, limitDependency?: any, numIterations?: number, useSparsity?: boolean): boolean;
	}
	export class btMotionState {
		constructor(); getWorldTransform(worldTrans?: btTransform): void;
		setWorldTransform(worldTrans?: btTransform): void;
	}
	export class btMprCollisionDescription {
		constructor(); m_firstDir: btVector3;
		m_maxGjkIterations: number;
		m_maximumDistanceSquared: any;
		m_gjkRelError2: any;
	}
	export class btMprDistanceInfo {
		constructor(); m_pointOnA: btVector3;
		m_pointOnB: btVector3;
		m_normalBtoA: btVector3;
		m_distance: any;
	}
	export class btMultiBody {
		constructor(n_links?: number, mass?: any, inertia?: btVector3, fixedBase?: boolean, canSleep?: boolean, multiDof?: boolean); m_baseCollider: btMultiBodyLinkCollider;
		m_baseName: any;
		m_basePos: btVector3;
		m_baseQuat: btQuaternion;
		m_baseMass: any;
		m_baseInertia: btVector3;
		m_baseForce: btVector3;
		m_baseTorque: btVector3;
		m_baseConstraintForce: btVector3;
		m_baseConstraintTorque: btVector3;
		m_links: any;
		m_colliders: any;
		m_deltaV: any;
		m_realBuf: any;
		m_vectorBuf: any;
		m_matrixBuf: any;
		m_cachedInertiaTopLeft: btMatrix3x3;
		m_cachedInertiaTopRight: btMatrix3x3;
		m_cachedInertiaLowerLeft: btMatrix3x3;
		m_cachedInertiaLowerRight: btMatrix3x3;
		m_fixedBase: boolean;
		m_awake: boolean;
		m_canSleep: boolean;
		m_sleepTimer: any;
		m_companionId: number;
		m_linearDamping: any;
		m_angularDamping: any;
		m_useGyroTerm: boolean;
		m_maxAppliedImpulse: any;
		m_maxCoordinateVelocity: any;
		m_hasSelfCollision: boolean;
		m_isMultiDof: boolean;
		__posUpdated: boolean;
		m_dofCount: number;
		m_posVarCnt: number;
		m_useRK4: boolean;
		m_useGlobalVelocities: boolean;
		m_internalNeedsJointFeedback: boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setupFixed(linkIndex?: number, mass?: any, inertia?: btVector3, parent?: number, rotParentToThis?: btQuaternion, parentComToThisPivotOffset?: btVector3, thisPivotToThisComOffset?: btVector3, disableParentCollision?: boolean): void;
		setupPrismatic(i?: number, mass?: any, inertia?: btVector3, parent?: number, rotParentToThis?: btQuaternion, jointAxis?: btVector3, parentComToThisPivotOffset?: btVector3, thisPivotToThisComOffset?: btVector3, disableParentCollision?: boolean): void;
		setupRevolute(linkIndex?: number, mass?: any, inertia?: btVector3, parentIndex?: number, rotParentToThis?: btQuaternion, jointAxis?: btVector3, parentComToThisPivotOffset?: btVector3, thisPivotToThisComOffset?: btVector3, disableParentCollision?: boolean): void;
		setupSpherical(linkIndex?: number, mass?: any, inertia?: btVector3, parent?: number, rotParentToThis?: btQuaternion, parentComToThisPivotOffset?: btVector3, thisPivotToThisComOffset?: btVector3, disableParentCollision?: boolean): void;
		setupPlanar(i?: number, mass?: any, inertia?: btVector3, parent?: number, rotParentToThis?: btQuaternion, rotationAxis?: btVector3, parentComToThisComOffset?: btVector3, disableParentCollision?: boolean): void;
		getLink(index?: number): btMultibodyLink;
		getLink(index?: number): btMultibodyLink;
		setBaseCollider(collider?: btMultiBodyLinkCollider): void;
		getBaseCollider(): btMultiBodyLinkCollider;
		getBaseCollider(): btMultiBodyLinkCollider;
		getParent(link_num?: number): number;
		getNumLinks(): number;
		getNumDofs(): number;
		getNumPosVars(): number;
		getBaseMass(): any;
		getBaseInertia(): btVector3;
		getLinkMass(i?: number): any;
		getLinkInertia(i?: number): btVector3;
		setBaseMass(mass?: any): void;
		setBaseInertia(inertia?: btVector3): void;
		getBasePos(): btVector3;
		getBaseVel(): btVector3;
		getWorldToBaseRot(): btQuaternion;
		getBaseOmega(): btVector3;
		setBasePos(pos?: btVector3): void;
		setBaseWorldTransform(tr?: btTransform): void;
		getBaseWorldTransform(): btTransform;
		setBaseVel(vel?: btVector3): void;
		setWorldToBaseRot(rot?: btQuaternion): void;
		setBaseOmega(omega?: btVector3): void;
		getJointPos(i?: number): any;
		getJointVel(i?: number): any;
		getJointVelMultiDof(i?: number): any;
		getJointPosMultiDof(i?: number): any;
		getJointVelMultiDof(i?: number): any;
		getJointPosMultiDof(i?: number): any;
		setJointPos(i?: number, q?: any): void;
		setJointVel(i?: number, qdot?: any): void;
		setJointPosMultiDof(i?: number, q?: any): void;
		setJointVelMultiDof(i?: number, qdot?: any): void;
		getVelocityVector(): any;
		getRVector(i?: number): btVector3;
		getParentToLocalRot(i?: number): btQuaternion;
		localPosToWorld(i?: number, vec?: btVector3): btVector3;
		localDirToWorld(i?: number, vec?: btVector3): btVector3;
		worldPosToLocal(i?: number, vec?: btVector3): btVector3;
		worldDirToLocal(i?: number, vec?: btVector3): btVector3;
		getKineticEnergy(): any;
		getAngularMomentum(): btVector3;
		clearForcesAndTorques(): void;
		clearConstraintForces(): void;
		clearVelocities(): void;
		addBaseForce(f?: btVector3): void;
		addBaseTorque(t?: btVector3): void;
		addLinkForce(i?: number, f?: btVector3): void;
		addLinkTorque(i?: number, t?: btVector3): void;
		addBaseConstraintForce(f?: btVector3): void;
		addBaseConstraintTorque(t?: btVector3): void;
		addLinkConstraintForce(i?: number, f?: btVector3): void;
		addLinkConstraintTorque(i?: number, t?: btVector3): void;
		addJointTorque(i?: number, Q?: any): void;
		addJointTorqueMultiDof(i?: number, dof?: number, Q?: any): void;
		addJointTorqueMultiDof(i?: number, Q?: any): void;
		getBaseForce(): btVector3;
		getBaseTorque(): btVector3;
		getLinkForce(i?: number): btVector3;
		getLinkTorque(i?: number): btVector3;
		getJointTorque(i?: number): any;
		getJointTorqueMultiDof(i?: number): any;
		stepVelocities(dt?: any, scratch_r?: any, scratch_v?: any, scratch_m?: any): void;
		stepVelocitiesMultiDof(dt?: any, scratch_r?: any, scratch_v?: any, scratch_m?: any, isConstraintPass?: boolean): void;
		calcAccelerationDeltas(force?: any, output?: any, scratch_r?: any, scratch_v?: any): void;
		calcAccelerationDeltasMultiDof(force?: any, output?: any, scratch_r?: any, scratch_v?: any): void;
		applyDeltaVee(delta_vee?: any): void;
		applyDeltaVee(delta_vee?: any, multiplier?: any): void;
		applyDeltaVeeMultiDof2(delta_vee?: any, multiplier?: any): void;
		processDeltaVeeMultiDof2(): void;
		applyDeltaVeeMultiDof(delta_vee?: any, multiplier?: any): void;
		stepPositions(dt?: any): void;
		stepPositionsMultiDof(dt?: any, pq?: any, pqd?: any): void;
		fillContactJacobian(link?: number, contact_point?: btVector3, normal?: btVector3, jac?: any, scratch_r?: any, scratch_v?: any, scratch_m?: any): void;
		fillContactJacobianMultiDof(link?: number, contact_point?: btVector3, normal?: btVector3, jac?: any, scratch_r?: any, scratch_v?: any, scratch_m?: any): void;
		filConstraintJacobianMultiDof(link?: number, contact_point?: btVector3, normal_ang?: btVector3, normal_lin?: btVector3, jac?: any, scratch_r?: any, scratch_v?: any, scratch_m?: any): void;
		setCanSleep(canSleep?: boolean): void;
		getCanSleep(): boolean;
		isAwake(): boolean;
		wakeUp(): void;
		goToSleep(): void;
		checkMotionAndSleepIfRequired(timestep?: any): void;
		hasFixedBase(): boolean;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		setNumLinks(numLinks?: number): void;
		getLinearDamping(): any;
		setLinearDamping(damp?: any): void;
		getAngularDamping(): any;
		setAngularDamping(damp?: any): void;
		getUseGyroTerm(): boolean;
		setUseGyroTerm(useGyro?: boolean): void;
		getMaxCoordinateVelocity(): any;
		setMaxCoordinateVelocity(maxVel?: any): void;
		getMaxAppliedImpulse(): any;
		setMaxAppliedImpulse(maxImp?: any): void;
		setHasSelfCollision(hasSelfCollision?: boolean): void;
		hasSelfCollision(): boolean;
		isMultiDof(): boolean;
		finalizeMultiDof(): void;
		useRK4Integration(use?: boolean): void;
		isUsingRK4Integration(): boolean;
		useGlobalVelocities(use?: boolean): void;
		isUsingGlobalVelocities(): boolean;
		isPosUpdated(): boolean;
		setPosUpdated(updated?: boolean): void;
		internalNeedsJointFeedback(): boolean;
		forwardKinematics(scratch_q?: any, scratch_m?: any): void;
		updateCollisionObjectWorldTransforms(scratch_q?: any, scratch_m?: any): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		getBaseName(): any;
		setBaseName(name?: string): void;
		compTreeLinkVelocities(omega?: btVector3, vel?: btVector3): void;
		solveImatrix(rhs_top?: btVector3, rhs_bot?: btVector3, result?: number): void;
		solveImatrix(rhs?: btSpatialForceVector, result?: btSpatialMotionVector): void;
		updateLinksDofOffsets(): void;
		mulMatrix(pA?: any, pB?: any, rowsA?: number, colsA?: number, rowsB?: number, colsB?: number, pC?: any): void;
	}
	export class btMultiBodyConstraint {
		constructor(bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean); m_bodyA: btMultiBody;
		m_bodyB: btMultiBody;
		m_linkA: number;
		m_linkB: number;
		m_numRows: number;
		m_jacSizeA: number;
		m_jacSizeBoth: number;
		m_posOffset: number;
		m_isUnilateral: boolean;
		m_numDofsFinalized: number;
		m_maxAppliedImpulse: any;
		m_data: any;
		updateJacobianSizes(): void;
		allocateJacobiansMultiDof(): void;
		finalizeMultiDof(): void;
		getIslandIdA(): number;
		getIslandIdB(): number;
		createConstraintRows(constraintRows?: any, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo): void;
		getNumRows(): number;
		getMultiBodyA(): btMultiBody;
		getMultiBodyB(): btMultiBody;
		internalSetAppliedImpulse(dof?: number, appliedImpulse?: any): void;
		getAppliedImpulse(dof?: number): any;
		getPosition(row?: number): any;
		setPosition(row?: number, pos?: any): void;
		isUnilateral(): boolean;
		jacobianA(row?: number): any;
		jacobianA(row?: number): any;
		jacobianB(row?: number): any;
		jacobianB(row?: number): any;
		getMaxAppliedImpulse(): any;
		setMaxAppliedImpulse(maxImp?: any): void;
		debugDraw(drawer?: btIDebugDraw): void;
		applyDeltaVee(data?: btMultiBodyJacobianData, delta_vee?: any, impulse?: any, velocityIndex?: number, ndof?: number): void;
		fillMultiBodyConstraint(solverConstraint?: btMultiBodySolverConstraint, data?: btMultiBodyJacobianData, jacOrgA?: any, jacOrgB?: any, contactNormalOnB?: btVector3, posAworld?: btVector3, posBworld?: btVector3, posError?: any, infoGlobal?: btContactSolverInfo, lowerLimit?: any, upperLimit?: any, relaxation?: any, isFriction?: boolean, desiredVelocity?: any, cfmSlip?: any): any;
	}
	export class btMultiBodyConstraintSolver {
		constructor(); m_multiBodyNonContactConstraints: any;
		m_multiBodyNormalContactConstraints: any;
		m_multiBodyFrictionContactConstraints: any;
		m_data: btMultiBodyJacobianData;
		m_tmpMultiBodyConstraints: btMultiBodyConstraint;
		m_tmpNumMultiBodyConstraints: number;
		m_tmpSolverBodyPool: any;
		m_tmpSolverContactConstraintPool: any;
		m_tmpSolverNonContactConstraintPool: any;
		m_tmpSolverContactFrictionConstraintPool: any;
		m_tmpSolverContactRollingFrictionConstraintPool: any;
		m_orderTmpConstraintPool: any;
		m_orderNonContactConstraintPool: any;
		m_orderFrictionConstraintPool: any;
		m_tmpConstraintSizesPool: any;
		m_maxOverrideNumSolverIterations: number;
		m_fixedBodyId: number;
		m_resolveSingleConstraintRowGeneric: any;
		m_resolveSingleConstraintRowLowerLimit: any;
		m_btSeed2: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		solveGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): any;
		solveGroupCacheFriendlyFinish(bodies?: btCollisionObject, numBodies?: number, infoGlobal?: btContactSolverInfo): any;
		solveMultiBodyGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, multiBodyConstraints?: btMultiBodyConstraint, numMultiBodyConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btSequentialImpulseConstraintSolver(): any;
		btSequentialImpulseConstraintSolver(): any;
		reset(): void;
		btRand2(): number;
		btRandInt2(n?: number): number;
		setRandSeed(seed?: number): void;
		getRandSeed(): number;
		getSolverType(): any;
		getActiveConstraintRowSolverGeneric(): any;
		setConstraintRowSolverGeneric(rowSolver?: any): void;
		getActiveConstraintRowSolverLowerLimit(): any;
		setConstraintRowSolverLowerLimit(rowSolver?: any): void;
		getScalarConstraintRowSolverGeneric(): any;
		getSSE2ConstraintRowSolverGeneric(): any;
		getSSE4_1ConstraintRowSolverGeneric(): any;
		getScalarConstraintRowSolverLowerLimit(): any;
		getSSE2ConstraintRowSolverLowerLimit(): any;
		getSSE4_1ConstraintRowSolverLowerLimit(): any;
		btConstraintSolver(): any;
		prepareSolve(int1?: any, int2?: any): void;
		allSolved(arg1?: btContactSolverInfo, arg2?: btIDebugDraw): void;
		resolveSingleConstraintRowGeneric(c?: btMultiBodySolverConstraint): void;
		resolveSingleConstraintRowGenericMultiBody(c?: btMultiBodySolverConstraint): void;
		convertContacts(manifoldPtr?: btPersistentManifold, numManifolds?: number, infoGlobal?: btContactSolverInfo): void;
		addMultiBodyFrictionConstraint(normalAxis?: btVector3, manifold?: btPersistentManifold, frictionIndex?: number, cp?: btManifoldPoint, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, infoGlobal?: btContactSolverInfo, desiredVelocity?: any, cfmSlip?: any): btMultiBodySolverConstraint;
		setupMultiBodyJointLimitConstraint(constraintRow?: btMultiBodySolverConstraint, jacA?: any, jacB?: any, penetration?: any, combinedFrictionCoeff?: any, combinedRestitutionCoeff?: any, infoGlobal?: btContactSolverInfo): void;
		setupMultiBodyContactConstraint(solverConstraint?: btMultiBodySolverConstraint, contactNormal?: btVector3, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, isFriction?: boolean, desiredVelocity?: any, cfmSlip?: any): void;
		convertMultiBodyContact(manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo): void;
		solveGroupCacheFriendlySetup(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		solveSingleIteration(iteration?: number, bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		applyDeltaVee(deltaV?: any, impulse?: any, velocityIndex?: number, ndof?: number): void;
		writeBackSolverBodyToMultiBody(constraint?: btMultiBodySolverConstraint, deltaTime?: any): void;
		setupFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		setupRollingFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		addFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		addRollingFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		setupContactConstraint(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, rel_pos1?: btVector3, rel_pos2?: btVector3): void;
		setFrictionConstraintImpulse(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo): void;
		restitutionCurve(rel_vel?: any, restitution?: any): any;
		convertContact(manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo): void;
		resolveSplitPenetrationSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		resolveSplitPenetrationImpulseCacheFriendly(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		getOrInitSolverBody(body?: btCollisionObject, timeStep?: any): number;
		initSolverBody(solverBody?: btSolverBody, collisionObject?: btCollisionObject, timeStep?: any): void;
		resolveSingleConstraintRowGeneric(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowGenericSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimit(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimitSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		solveGroupCacheFriendlySplitImpulseIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): void;
		solveGroupCacheFriendlyIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
	}
	export class btMultiBodyDoubleData {
		constructor(); m_baseName: any;
		m_links: btMultiBodyLinkDoubleData;
		m_baseCollider: btCollisionObjectDoubleData;
		m_baseWorldTransform: btTransformDoubleData;
		m_baseInertia: btVector3DoubleData;
		m_numLinks: number;
		m_baseMass: any;
		m_padding: string;
	}
	export class btMultiBodyDynamicsWorld {
		constructor(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btMultiBodyConstraintSolver, collisionConfiguration?: btCollisionConfiguration); m_multiBodies: any;
		m_multiBodyConstraints: any;
		m_sortedMultiBodyConstraints: any;
		m_multiBodyConstraintSolver: btMultiBodyConstraintSolver;
		m_solverMultiBodyIslandCallback: any;
		m_sortedConstraints: any;
		m_solverIslandCallback: any;
		m_constraintSolver: btConstraintSolver;
		m_islandManager: btSimulationIslandManager;
		m_constraints: any;
		m_nonStaticRigidBodies: any;
		m_gravity: btVector3;
		m_localTime: any;
		m_fixedTimeStep: any;
		m_ownsIslandManager: boolean;
		m_ownsConstraintSolver: boolean;
		m_synchronizeAllMotionStates: boolean;
		m_applySpeculativeContactRestitution: boolean;
		m_actions: any;
		m_profileTimings: number;
		m_latencyMotionStateInterpolation: boolean;
		m_predictiveManifolds: any;
		m_internalTickCallback: any;
		m_internalPreTickCallback: any;
		m_worldUserInfo: any;
		m_solverInfo: btContactSolverInfo;
		m_collisionObjects: any;
		m_dispatcher1: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_broadphasePairCache: btBroadphaseInterface;
		m_debugDrawer: btIDebugDraw;
		m_forceUpdateAllAabbs: boolean;
		addMultiBody(body?: btMultiBody, group?: number, mask?: number): void;
		removeMultiBody(body?: btMultiBody): void;
		getNumMultibodies(): number;
		getMultiBody(mbIndex?: number): btMultiBody;
		addMultiBodyConstraint(constraint?: btMultiBodyConstraint): void;
		getNumMultiBodyConstraints(): number;
		getMultiBodyConstraint(constraintIndex?: number): btMultiBodyConstraint;
		getMultiBodyConstraint(constraintIndex?: number): btMultiBodyConstraint;
		removeMultiBodyConstraint(constraint?: btMultiBodyConstraint): void;
		integrateTransforms(timeStep?: any): void;
		debugDrawWorld(): void;
		debugDrawMultiBodyConstraint(constraint?: btMultiBodyConstraint): void;
		forwardKinematics(): void;
		clearForces(): void;
		clearMultiBodyConstraintForces(): void;
		clearMultiBodyForces(): void;
		applyGravity(): void;
		serialize(serializer?: btSerializer): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btDiscreteDynamicsWorld(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration): any;
		btDiscreteDynamicsWorld(): any;
		stepSimulation(timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any): number;
		synchronizeMotionStates(): void;
		synchronizeSingleMotionState(body?: btRigidBody): void;
		addConstraint(constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean): void;
		removeConstraint(constraint?: btTypedConstraint): void;
		addAction(arg1?: btActionInterface): void;
		removeAction(arg1?: btActionInterface): void;
		getSimulationIslandManager(): btSimulationIslandManager;
		getSimulationIslandManager(): btSimulationIslandManager;
		getCollisionWorld(): btCollisionWorld;
		setGravity(gravity?: btVector3): void;
		getGravity(): btVector3;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		addRigidBody(body?: btRigidBody): void;
		addRigidBody(body?: btRigidBody, group?: number, mask?: number): void;
		removeRigidBody(body?: btRigidBody): void;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		debugDrawConstraint(constraint?: btTypedConstraint): void;
		setConstraintSolver(solver?: btConstraintSolver): void;
		getConstraintSolver(): btConstraintSolver;
		getNumConstraints(): number;
		getConstraint(index?: number): btTypedConstraint;
		getConstraint(index?: number): btTypedConstraint;
		getWorldType(): any;
		setNumTasks(numTasks?: number): void;
		updateVehicles(timeStep?: any): void;
		addVehicle(vehicle?: btActionInterface): void;
		removeVehicle(vehicle?: btActionInterface): void;
		addCharacter(character?: btActionInterface): void;
		removeCharacter(character?: btActionInterface): void;
		setSynchronizeAllMotionStates(synchronizeAll?: boolean): void;
		getSynchronizeAllMotionStates(): boolean;
		setApplySpeculativeContactRestitution(enable?: boolean): void;
		getApplySpeculativeContactRestitution(): boolean;
		setLatencyMotionStateInterpolation(latencyInterpolation?: boolean): void;
		getLatencyMotionStateInterpolation(): boolean;
		btDynamicsWorld(dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btDynamicsWorld(): any;
		setInternalTickCallback(cb?: any, worldUserInfo?: void, isPreTick?: boolean): void;
		setWorldUserInfo(worldUserInfo?: void): void;
		getWorldUserInfo(): any;
		getSolverInfo(): btContactSolverInfo;
		btCollisionWorld(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btCollisionWorld(): any;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		updateAabbs(): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		calculateSimulationIslands(): void;
		updateActivationState(timeStep?: any): void;
		solveConstraints(solverInfo?: btContactSolverInfo): void;
		serializeMultiBodies(serializer?: btSerializer): void;
		predictUnconstraintMotion(timeStep?: any): void;
		updateActions(timeStep?: any): void;
		startProfiling(timeStep?: any): void;
		internalSingleStepSimulation(timeStep?: any): void;
		createPredictiveContacts(timeStep?: any): void;
		saveKinematicState(timeStep?: any): void;
		serializeRigidBodies(serializer?: btSerializer): void;
		serializeDynamicsWorldInfo(serializer?: btSerializer): void;
		serializeCollisionObjects(serializer?: btSerializer): void;
	}
	export class btMultiBodyFloatData {
		constructor(); m_baseName: any;
		m_links: btMultiBodyLinkFloatData;
		m_baseCollider: btCollisionObjectFloatData;
		m_baseWorldTransform: btTransformFloatData;
		m_baseInertia: btVector3FloatData;
		m_baseMass: number;
		m_numLinks: number;
	}
	export class btMultiBodyJacobianData {
		constructor(); m_jacobians: any;
		m_deltaVelocitiesUnitImpulse: any;
		m_deltaVelocities: any;
		scratch_r: any;
		scratch_v: any;
		scratch_m: any;
		m_solverBodyPool: any;
		m_fixedBodyId: number;
	}
	export class btMultiBodyJointFeedback {
		constructor(); m_reactionForces: btSpatialForceVector;
	}
	export class btMultiBodyJointLimitConstraint {
		constructor(body?: btMultiBody, link?: number, lower?: any, upper?: any); m_lowerBound: any;
		m_upperBound: any;
		m_bodyA: btMultiBody;
		m_bodyB: btMultiBody;
		m_linkA: number;
		m_linkB: number;
		m_numRows: number;
		m_jacSizeA: number;
		m_jacSizeBoth: number;
		m_posOffset: number;
		m_isUnilateral: boolean;
		m_numDofsFinalized: number;
		m_maxAppliedImpulse: any;
		m_data: any;
		finalizeMultiDof(): void;
		getIslandIdA(): number;
		getIslandIdB(): number;
		createConstraintRows(constraintRows?: any, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo): void;
		debugDraw(drawer?: btIDebugDraw): void;
		btMultiBodyConstraint(bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean): any;
		btMultiBodyConstraint(): any;
		updateJacobianSizes(): void;
		allocateJacobiansMultiDof(): void;
		getNumRows(): number;
		getMultiBodyA(): btMultiBody;
		getMultiBodyB(): btMultiBody;
		internalSetAppliedImpulse(dof?: number, appliedImpulse?: any): void;
		getAppliedImpulse(dof?: number): any;
		getPosition(row?: number): any;
		setPosition(row?: number, pos?: any): void;
		isUnilateral(): boolean;
		jacobianA(row?: number): any;
		jacobianA(row?: number): any;
		jacobianB(row?: number): any;
		jacobianB(row?: number): any;
		getMaxAppliedImpulse(): any;
		setMaxAppliedImpulse(maxImp?: any): void;
	}
	export class btMultiBodyJointMotor {
		constructor(body?: btMultiBody, link?: number, linkDoF?: number, desiredVelocity?: any, maxMotorImpulse?: any); m_desiredVelocity: any;
		m_bodyA: btMultiBody;
		m_bodyB: btMultiBody;
		m_linkA: number;
		m_linkB: number;
		m_numRows: number;
		m_jacSizeA: number;
		m_jacSizeBoth: number;
		m_posOffset: number;
		m_isUnilateral: boolean;
		m_numDofsFinalized: number;
		m_maxAppliedImpulse: any;
		m_data: any;
		finalizeMultiDof(): void;
		getIslandIdA(): number;
		getIslandIdB(): number;
		createConstraintRows(constraintRows?: any, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo): void;
		setVelocityTarget(velTarget?: any): void;
		debugDraw(drawer?: btIDebugDraw): void;
		btMultiBodyConstraint(bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean): any;
		btMultiBodyConstraint(): any;
		updateJacobianSizes(): void;
		allocateJacobiansMultiDof(): void;
		getNumRows(): number;
		getMultiBodyA(): btMultiBody;
		getMultiBodyB(): btMultiBody;
		internalSetAppliedImpulse(dof?: number, appliedImpulse?: any): void;
		getAppliedImpulse(dof?: number): any;
		getPosition(row?: number): any;
		setPosition(row?: number, pos?: any): void;
		isUnilateral(): boolean;
		jacobianA(row?: number): any;
		jacobianA(row?: number): any;
		jacobianB(row?: number): any;
		jacobianB(row?: number): any;
		getMaxAppliedImpulse(): any;
		setMaxAppliedImpulse(maxImp?: any): void;
	}
	export class btMultibodyLink {
		constructor(); m_mass: any;
		m_inertiaLocal: btVector3;
		m_parent: number;
		m_zeroRotParentToThis: btQuaternion;
		m_dVector: btVector3;
		m_eVector: btVector3;
		m_absFrameTotVelocity: btSpatialMotionVector;
		m_absFrameLocVelocity: btSpatialMotionVector;
		m_axes: btSpatialMotionVector;
		m_dofOffset: number;
		m_cfgOffset: number;
		m_cachedRotParentToThis: btQuaternion;
		m_cachedRVector: btVector3;
		m_appliedForce: btVector3;
		m_appliedTorque: btVector3;
		m_appliedConstraintForce: btVector3;
		m_appliedConstraintTorque: btVector3;
		m_jointPos: any;
		m_jointTorque: any;
		m_collider: btMultiBodyLinkCollider;
		m_flags: number;
		m_dofCount: number;
		m_posVarCount: number;
		m_jointType: any;
		m_jointFeedback: btMultiBodyJointFeedback;
		hInterface: any;
		useQuantizedAabbCompression: any;
		m_linkName: any;
		m_jointName: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setAxisTop(dof?: number, axis?: btVector3): void;
		setAxisBottom(dof?: number, axis?: btVector3): void;
		setAxisTop(dof?: number, x?: any, y?: any, z?: any): void;
		setAxisBottom(dof?: number, x?: any, y?: any, z?: any): void;
		getAxisTop(dof?: number): btVector3;
		getAxisBottom(dof?: number): btVector3;
		updateCache(): void;
		updateCacheMultiDof(pq?: any): void;
	}
	export class btMultiBodyLinkCollider {
		constructor(multiBody?: btMultiBody, link?: number); m_multiBody: btMultiBody;
		m_link: number;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		btCollisionObject(): any;
		btCollisionObject(): any;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleObject(serializer?: btSerializer): void;
	}
	export class btMultiBodyLinkDoubleData {
		constructor(); m_zeroRotParentToThis: btQuaternionDoubleData;
		m_parentComToThisComOffset: btVector3DoubleData;
		m_thisPivotToThisComOffset: btVector3DoubleData;
		m_jointAxisTop: btVector3DoubleData;
		m_jointAxisBottom: btVector3DoubleData;
		m_linkName: any;
		m_jointName: any;
		m_linkCollider: btCollisionObjectDoubleData;
		m_linkInertia: btVector3DoubleData;
		m_linkMass: any;
		m_parentIndex: number;
		m_jointType: number;
		m_dofCount: number;
		m_posVarCount: number;
		m_jointPos: any;
		m_jointVel: any;
		m_jointTorque: any;
	}
	export class btMultiBodyLinkFloatData {
		constructor(); m_zeroRotParentToThis: btQuaternionFloatData;
		m_parentComToThisComOffset: btVector3FloatData;
		m_thisPivotToThisComOffset: btVector3FloatData;
		m_jointAxisTop: btVector3FloatData;
		m_jointAxisBottom: btVector3FloatData;
		m_linkName: any;
		m_jointName: any;
		m_linkCollider: btCollisionObjectFloatData;
		m_linkInertia: btVector3FloatData;
		m_dofCount: number;
		m_linkMass: number;
		m_parentIndex: number;
		m_jointType: number;
		m_jointPos: number;
		m_jointVel: number;
		m_jointTorque: number;
		m_posVarCount: number;
	}
	export class btMultiBodyPoint2Point {
		constructor(bodyA?: btMultiBody, linkA?: number, bodyB?: btMultiBody, linkB?: number, pivotInA?: btVector3, pivotInB?: btVector3); m_rigidBodyA: btRigidBody;
		m_rigidBodyB: btRigidBody;
		m_pivotInA: btVector3;
		m_pivotInB: btVector3;
		m_bodyA: btMultiBody;
		m_bodyB: btMultiBody;
		m_linkA: number;
		m_linkB: number;
		m_numRows: number;
		m_jacSizeA: number;
		m_jacSizeBoth: number;
		m_posOffset: number;
		m_isUnilateral: boolean;
		m_numDofsFinalized: number;
		m_maxAppliedImpulse: any;
		m_data: any;
		finalizeMultiDof(): void;
		getIslandIdA(): number;
		getIslandIdB(): number;
		createConstraintRows(constraintRows?: any, data?: btMultiBodyJacobianData, infoGlobal?: btContactSolverInfo): void;
		getPivotInB(): btVector3;
		setPivotInB(pivotInB?: btVector3): void;
		debugDraw(drawer?: btIDebugDraw): void;
		btMultiBodyConstraint(bodyA?: btMultiBody, bodyB?: btMultiBody, linkA?: number, linkB?: number, numRows?: number, isUnilateral?: boolean): any;
		btMultiBodyConstraint(): any;
		updateJacobianSizes(): void;
		allocateJacobiansMultiDof(): void;
		getNumRows(): number;
		getMultiBodyA(): btMultiBody;
		getMultiBodyB(): btMultiBody;
		internalSetAppliedImpulse(dof?: number, appliedImpulse?: any): void;
		getAppliedImpulse(dof?: number): any;
		getPosition(row?: number): any;
		setPosition(row?: number, pos?: any): void;
		isUnilateral(): boolean;
		jacobianA(row?: number): any;
		jacobianA(row?: number): any;
		jacobianB(row?: number): any;
		jacobianB(row?: number): any;
		getMaxAppliedImpulse(): any;
		setMaxAppliedImpulse(maxImp?: any): void;
	}
	export class btMultiBodySolverConstraint {
		constructor(); m_deltaVelAindex: number;
		m_jacAindex: number;
		m_deltaVelBindex: number;
		m_jacBindex: number;
		m_relpos1CrossNormal: btVector3;
		m_contactNormal1: btVector3;
		m_relpos2CrossNormal: btVector3;
		m_contactNormal2: btVector3;
		m_angularComponentA: btVector3;
		m_angularComponentB: btVector3;
		m_appliedPushImpulse: any;
		m_appliedImpulse: any;
		m_friction: any;
		m_jacDiagABInv: any;
		m_rhs: any;
		m_cfm: any;
		m_lowerLimit: any;
		m_upperLimit: any;
		m_rhsPenetration: any;
		m_overrideNumSolverIterations: number;
		m_frictionIndex: number;
		m_solverBodyIdA: number;
		m_multiBodyA: btMultiBody;
		m_linkA: number;
		m_solverBodyIdB: number;
		m_multiBodyB: btMultiBody;
		m_linkB: number;
		m_orgConstraint: btMultiBodyConstraint;
		m_orgDofIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btMultimaterialTriangleMeshShape {
		constructor(meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, buildBvh?: boolean); m_materialList: any;
		m_triangleMaterials: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getName(): any;
		getMaterialProperties(partID?: number, triIndex?: number): btMaterial;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btBvhTriangleMeshShape(meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, buildBvh?: boolean): any;
		btBvhTriangleMeshShape(meshInterface?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, buildBvh?: boolean): any;
		btBvhTriangleMeshShape(): any;
		getOwnsBvh(): boolean;
		performRaycast(callback?: btTriangleCallback, raySource?: btVector3, rayTarget?: btVector3): void;
		performConvexcast(callback?: btTriangleCallback, boxSource?: btVector3, boxTarget?: btVector3, boxMin?: btVector3, boxMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		refitTree(aabbMin?: btVector3, aabbMax?: btVector3): void;
		partialRefitTree(aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getOptimizedBvh(): btOptimizedBvh;
		setOptimizedBvh(bvh?: btOptimizedBvh, localScaling?: btVector3, a?: any, b?: any): void;
		buildOptimizedBvh(): void;
		usesQuantizedAabbCompression(): boolean;
		setTriangleInfoMap(triangleInfoMap?: btTriangleInfoMap): void;
		getTriangleInfoMap(): btTriangleInfoMap;
		getTriangleInfoMap(): btTriangleInfoMap;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleBvh(serializer?: btSerializer): void;
		serializeSingleTriangleInfoMap(serializer?: btSerializer): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTriangleMeshShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		recalcLocalAabb(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getLocalScaling(): btVector3;
		getMeshInterface(): btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		getLocalAabbMin(): btVector3;
		getLocalAabbMax(): btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btMultiSapBroadphase {
		constructor(maxProxies?: number, pairCache?: btOverlappingPairCache); m_multiSapProxies: any;
		m_sapBroadphases: any;
		m_simpleBroadphase: btSimpleBroadphase;
		m_overlappingPairs: btOverlappingPairCache;
		m_optimizedAabbTree: btQuantizedBvh;
		m_ownsPairCache: boolean;
		m_filterCallback: btOverlapFilterCallback;
		m_invalidPair: number;
		getBroadphaseArray(): any;
		getBroadphaseArray(): any;
		createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		addToChildBroadphase(parentMultiSapProxy?: btMultiSapProxy, childProxy?: btBroadphaseProxy, childBroadphase?: btBroadphaseInterface): void;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		testAabbOverlap(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		buildTree(bvhAabbMin?: btVector3, bvhAabbMax?: btVector3): void;
		printStats(): void;
		quicksort(a?: any, lo?: number, hi?: number): void;
		resetPool(dispatcher?: btDispatcher): void;
		btBroadphaseInterface(): any;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
	}
	export class btMultiSapBroadphasePairSortPredicate { constructor(); }
	export class btMultiSapProxy {
		constructor(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number); m_bridgeProxies: any;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		m_shapeType: number;
		m_clientObject: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_multiSapParentProxy: any;
		m_uniqueId: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getUid(): number;
		btBroadphaseProxy(): any;
		btBroadphaseProxy(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void): any;
	}
	export class btMultiSphereShape {
		constructor(positions?: btVector3, radi?: any, numSpheres?: number);
		m_localPositionArray: any;
		m_radiArray: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getSphereCount(): number;
		getSpherePosition(index?: number): btVector3;
		getSphereRadius(index?: number): any;
		getName(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		setLocalScaling(scaling?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btMultiSphereShapeData {
		constructor(); m_convexInternalShapeData: btConvexInternalShapeData;
		m_localPositionArrayPtr: btPositionAndRadius;
		m_localPositionArraySize: number;
		m_padding: string;
	}
	export class btNNCGConstraintSolver {
		constructor(); m_onlyForNoneContact: boolean;
		m_deltafLengthSqrPrev: any;
		m_pNC: any;
		m_pC: any;
		m_pCF: any;
		m_pCRF: any;
		m_deltafNC: any;
		m_deltafC: any;
		m_deltafCF: any;
		m_deltafCRF: any;
		m_tmpSolverBodyPool: any;
		m_tmpSolverContactConstraintPool: any;
		m_tmpSolverNonContactConstraintPool: any;
		m_tmpSolverContactFrictionConstraintPool: any;
		m_tmpSolverContactRollingFrictionConstraintPool: any;
		m_orderTmpConstraintPool: any;
		m_orderNonContactConstraintPool: any;
		m_orderFrictionConstraintPool: any;
		m_tmpConstraintSizesPool: any;
		m_maxOverrideNumSolverIterations: number;
		m_fixedBodyId: number;
		m_resolveSingleConstraintRowGeneric: any;
		m_resolveSingleConstraintRowLowerLimit: any;
		m_btSeed2: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getSolverType(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btSequentialImpulseConstraintSolver(): any;
		btSequentialImpulseConstraintSolver(): any;
		solveGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): any;
		reset(): void;
		btRand2(): number;
		btRandInt2(n?: number): number;
		setRandSeed(seed?: number): void;
		getRandSeed(): number;
		getActiveConstraintRowSolverGeneric(): any;
		setConstraintRowSolverGeneric(rowSolver?: any): void;
		getActiveConstraintRowSolverLowerLimit(): any;
		setConstraintRowSolverLowerLimit(rowSolver?: any): void;
		getScalarConstraintRowSolverGeneric(): any;
		getSSE2ConstraintRowSolverGeneric(): any;
		getSSE4_1ConstraintRowSolverGeneric(): any;
		getScalarConstraintRowSolverLowerLimit(): any;
		getSSE2ConstraintRowSolverLowerLimit(): any;
		getSSE4_1ConstraintRowSolverLowerLimit(): any;
		btConstraintSolver(): any;
		prepareSolve(a?: any, b?: any): void;
		allSolved(arg1?: btContactSolverInfo, arg2?: btIDebugDraw): void;
		solveGroupCacheFriendlyFinish(bodies?: btCollisionObject, numBodies?: number, infoGlobal?: btContactSolverInfo): any;
		solveSingleIteration(iteration?: number, bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		solveGroupCacheFriendlySetup(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		setupFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		setupRollingFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		addFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		addRollingFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		setupContactConstraint(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, rel_pos1?: btVector3, rel_pos2?: btVector3): void;
		setFrictionConstraintImpulse(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo): void;
		restitutionCurve(rel_vel?: any, restitution?: any): any;
		convertContacts(manifoldPtr?: btPersistentManifold, numManifolds?: number, infoGlobal?: btContactSolverInfo): void;
		convertContact(manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo): void;
		resolveSplitPenetrationSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		resolveSplitPenetrationImpulseCacheFriendly(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		getOrInitSolverBody(body?: btCollisionObject, timeStep?: any): number;
		initSolverBody(solverBody?: btSolverBody, collisionObject?: btCollisionObject, timeStep?: any): void;
		resolveSingleConstraintRowGeneric(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowGenericSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimit(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimitSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		solveGroupCacheFriendlySplitImpulseIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): void;
		solveGroupCacheFriendlyIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
	}
	export class btNodeOverlapCallback {
		constructor(); processNode(subPart?: number, triangleIndex?: number): void;
	}
	export class btNullPairCache {
		constructor(); m_overlappingPairArray: any;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArray(): any;
		cleanOverlappingPair(arg1?: btBroadphasePair, arg2?: btDispatcher): void;
		getNumOverlappingPairs(): number;
		cleanProxyFromPairs(arg1?: btBroadphaseProxy, arg2?: btDispatcher): void;
		setOverlapFilterCallback(arg1?: btOverlapFilterCallback): void;
		processAllOverlappingPairs(arg1?: btOverlapCallback, arg2?: btDispatcher): void;
		findPair(arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy): btBroadphasePair;
		hasDeferredRemoval(): boolean;
		setInternalGhostPairCallback(arg1?: btOverlappingPairCallback): void;
		addOverlappingPair(arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy): btBroadphasePair;
		removeOverlappingPair(arg1?: btBroadphaseProxy, arg2?: btBroadphaseProxy, arg3?: btDispatcher): any;
		removeOverlappingPairsContainingProxy(arg1?: btBroadphaseProxy, arg2?: btDispatcher): void;
		sortOverlappingPairs(dispatcher?: btDispatcher): void;
		btOverlappingPairCache(): any;
		btOverlappingPairCallback(): any;
	}
	export class btOptimizedBvh {
		constructor(); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		build(triangles?: btStridingMeshInterface, useQuantizedAabbCompression?: boolean, bvhAabbMin?: btVector3, bvhAabbMax?: btVector3): void;
		refit(triangles?: btStridingMeshInterface, aabbMin?: btVector3, aabbMax?: btVector3): void;
		refitPartial(triangles?: btStridingMeshInterface, aabbMin?: btVector3, aabbMax?: btVector3): void;
		updateBvhNodes(meshInterface?: btStridingMeshInterface, firstNode?: number, endNode?: number, index?: number): void;
		serializeInPlace(o_alignedDataBuffer?: void, i_dataBufferSize?: any, i_swapEndian?: boolean): boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btQuantizedBvh(): any;
		btQuantizedBvh(): any;
		setQuantizationValues(bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, quantizationMargin?: any): void;
		getLeafNodeArray(): any;
		buildInternal(): void;
		reportAabbOverlappingNodex(nodeCallback?: btNodeOverlapCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		reportRayOverlappingNodex(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3): void;
		reportBoxCastOverlappingNodex(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3): void;
		quantize(out?: number, point?: btVector3, isMax?: number): void;
		quantizeWithClamp(out?: number, point2?: btVector3, isMax?: number): void;
		unQuantize(vecIn?: number): btVector3;
		setTraversalMode(traversalMode?: any): void;
		getQuantizedNodeArray(): any;
		getSubtreeInfoArray(): any;
		calculateSerializeBufferSize(): any;
		serialize(o_alignedDataBuffer?: void, i_dataBufferSize?: any, i_swapEndian?: boolean): boolean;
		calculateSerializeBufferSizeNew(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerializeFloat(quantizedBvhFloatData?: btQuantizedBvhFloatData): void;
		deSerializeDouble(quantizedBvhDoubleData?: btQuantizedBvhDoubleData): void;
		isQuantized(): boolean;
	}
	export class btOptimizedBvhNode {
		constructor(); m_aabbMinOrg: btVector3;
		m_aabbMaxOrg: btVector3;
		m_escapeIndex: number;
		m_subPart: number;
		m_triangleIndex: number;
		m_padding: string;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btOptimizedBvhNodeDoubleData {
		constructor(); m_aabbMinOrg: btVector3DoubleData;
		m_aabbMaxOrg: btVector3DoubleData;
		m_escapeIndex: number;
		m_subPart: number;
		m_triangleIndex: number;
		m_pad: string;
	}
	export class btOptimizedBvhNodeFloatData {
		constructor(); m_aabbMinOrg: btVector3FloatData;
		m_aabbMaxOrg: btVector3FloatData;
		m_escapeIndex: number;
		m_subPart: number;
		m_triangleIndex: number;
		m_pad: string;
	}
	export class btOverlapCallback {
		constructor(); processOverlap(pair?: btBroadphasePair): boolean;
	}
	export class btOverlapFilterCallback {
		constructor(); needBroadphaseCollision(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
	}
	export class btOverlappingPairCache {
		constructor(); getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArray(): any;
		cleanOverlappingPair(pair?: btBroadphasePair, dispatcher?: btDispatcher): void;
		getNumOverlappingPairs(): number;
		cleanProxyFromPairs(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setOverlapFilterCallback(callback?: btOverlapFilterCallback): void;
		processAllOverlappingPairs(arg1?: btOverlapCallback, dispatcher?: btDispatcher): void;
		findPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		hasDeferredRemoval(): boolean;
		setInternalGhostPairCallback(ghostPairCallback?: btOverlappingPairCallback): void;
		sortOverlappingPairs(dispatcher?: btDispatcher): void;
		btOverlappingPairCallback(): any;
		addOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		removeOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher): any;
		removeOverlappingPairsContainingProxy(proxy0?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
	}
	export class btOverlappingPairCallback {
		constructor(); addOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		removeOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher): any;
		removeOverlappingPairsContainingProxy(proxy0?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
	}
	export class btPairCachingGhostObject {
		constructor(); m_hashPairCache: btHashedOverlappingPairCache;
		addOverlappingObjectInternal(otherProxy?: btBroadphaseProxy, thisProxy?: btBroadphaseProxy): void;
		removeOverlappingObjectInternal(otherProxy?: btBroadphaseProxy, dispatcher?: btDispatcher, thisProxy?: btBroadphaseProxy): void;
		getOverlappingPairCache(): btHashedOverlappingPairCache;
		btGhostObject(): any;
		btGhostObject(): any;
		convexSweepTest(castShape?: btConvexShape, convexFromWorld?: btTransform, convexToWorld?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		getNumOverlappingObjects(): number;
		getOverlappingObject(index?: number): btCollisionObject;
		getOverlappingObject(index?: number): btCollisionObject;
		getOverlappingPairs(): any;
		getOverlappingPairs(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		btCollisionObject(): any;
		btCollisionObject(): any;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleObject(serializer?: btSerializer): void;
	}
	export class btPairSet {
		constructor(); push_pair(index1?: number, index2?: number): void;
		push_pair_inv(index1?: number, index2?: number): void;
		btAlignedObjectArray(): any;
		btAlignedObjectArray(otherArray?: btAlignedObjectArray): any;
		btAlignedObjectArray(): any;
		size(): number;
		at(n?: number): any;
		at(n?: number): any;
		clear(): void;
		pop_back(): void;
		resizeNoInitialize(newsize?: number): void;
		resize(newsize?: number, fillData?: any): void;
		expandNonInitializing(): any;
		expand(fillValue?: any): any;
		push_back(_Val?: any): void;
		capacity(): number;
		reserve(_Count?: number): void;
		quickSortInternal(CompareFunc?: any, lo?: number, hi?: number): void;
		quickSort(CompareFunc?: any): void;
		downHeap(pArr?: any, k?: number, n?: number, CompareFunc?: any): void;
		swap(index0?: number, index1?: number): void;
		heapSort(CompareFunc?: any): void;
		findBinarySearch(key?: any): number;
		findLinearSearch(key?: any): number;
		remove(key?: any): void;
		initializeFromBuffer(buffer?: void, size?: number, capacity?: number): void;
		copyFromArray(otherArray?: btAlignedObjectArray): void;
	}
	export class btPersistentManifold {
		constructor(body0?: btCollisionObject, body1?: btCollisionObject, int?: any, contactBreakingThreshold?: any, contactProcessingThreshold?: any); m_companionIdA: number;
		m_companionIdB: number;
		m_index1a: number;
		m_objectType: number;
		m_pointCache: btManifoldPoint;
		m_body0: btCollisionObject;
		m_body1: btCollisionObject;
		m_cachedPoints: number;
		m_contactBreakingThreshold: any;
		m_contactProcessingThreshold: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getBody0(): btCollisionObject;
		getBody1(): btCollisionObject;
		setBodies(body0?: btCollisionObject, body1?: btCollisionObject): void;
		clearUserCache(pt?: btManifoldPoint): void;
		getNumContacts(): number;
		setNumContacts(cachedPoints?: number): void;
		getContactPoint(index?: number): btManifoldPoint;
		getContactPoint(index?: number): btManifoldPoint;
		getContactBreakingThreshold(): any;
		getContactProcessingThreshold(): any;
		setContactBreakingThreshold(contactBreakingThreshold?: any): void;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getCacheEntry(newPoint?: btManifoldPoint): number;
		addManifoldPoint(newPoint?: btManifoldPoint, isPredictive?: boolean): number;
		removeContactPoint(index?: number): void;
		replaceContactPoint(newPoint?: btManifoldPoint, insertIndex?: number): void;
		validContactDistance(pt?: btManifoldPoint): boolean;
		refreshContactPoints(trA?: btTransform, trB?: btTransform): void;
		clearManifold(): void;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		sortCachedPoints(pt?: btManifoldPoint): number;
		findContactPoint(unUsed?: btManifoldPoint, numUnused?: number, pt?: btManifoldPoint): number;
	}
	export class btPersistentManifoldSortPredicate { constructor(); }
	export class btPerturbedContactResult {
		constructor(originalResult?: btManifoldResult, transformA?: btTransform, transformB?: btTransform, unPerturbedTransform?: btTransform, perturbA?: boolean, debugDrawer?: btIDebugDraw); m_originalManifoldResult: btManifoldResult;
		m_transformA: btTransform;
		m_transformB: btTransform;
		m_unPerturbedTransform: btTransform;
		m_perturbA: boolean;
		m_debugDrawer: btIDebugDraw;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, orgDepth?: any): void;
		btManifoldResult(): any;
		btManifoldResult(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btManifoldResult(): any;
		setPersistentManifold(manifoldPtr?: btPersistentManifold): void;
		getPersistentManifold(): btPersistentManifold;
		getPersistentManifold(): btPersistentManifold;
		setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
		refreshContactPoints(): void;
		getBody0Wrap(): btCollisionObjectWrapper;
		getBody1Wrap(): btCollisionObjectWrapper;
		setBody0Wrap(obj0Wrap?: btCollisionObjectWrapper): void;
		setBody1Wrap(obj1Wrap?: btCollisionObjectWrapper): void;
		getBody0Internal(): btCollisionObject;
		getBody1Internal(): btCollisionObject;
		Result(): any;
	}
	export class btPhysicsSystem {
		constructor(); m_collisionShapes: any;
		m_collisionObjects: any;
		m_constraints: any;
	}
	export class btPlane {
		constructor(n?: btVector3, d?: any); normal: btVector3;
		dist: any;
	}
	export class btPlaneShape {
		constructor(v?: btVector3, f?: number); get_plane_equation(equation?: btVector4): void;
		get_plane_equation_transformed(trans?: btTransform, equation?: btVector4): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btStaticPlaneShape(planeNormal?: btVector3, planeConstant?: any): any;
		btStaticPlaneShape(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getPlaneNormal(): btVector3;
		getPlaneConstant(): any;
		getName(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btPoint2PointConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3); m_useSolveConstraintObsolete: boolean;
		m_setting: btConstraintSetting;
		m_objectType: number;
		m_jac: btJacobianEntry;
		m_pivotInA: btVector3;
		m_pivotInB: btVector3;
		m_flags: number;
		m_erp: any;
		m_cfm: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, body0_trans?: btTransform, body1_trans?: btTransform): void;
		updateRHS(timeStep?: any): void;
		setPivotA(pivotA?: btVector3): void;
		setPivotB(pivotB?: btVector3): void;
		getPivotInA(): btVector3;
		getPivotInB(): btVector3;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btPoint2PointConstraintDoubleData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_pivotInA: btVector3DoubleData;
		m_pivotInB: btVector3DoubleData;
	}
	export class btPoint2PointConstraintDoubleData2 {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_pivotInA: btVector3DoubleData;
		m_pivotInB: btVector3DoubleData;
	}
	export class btPoint2PointConstraintFloatData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_pivotInA: btVector3FloatData;
		m_pivotInB: btVector3FloatData;
	}
	export class btPointCollector {
		constructor(); m_normalOnBInWorld: btVector3;
		m_pointInWorld: btVector3;
		m_distance: any;
		m_hasResult: boolean;
		setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any): void;
		Result(): any;
	}
	export class btPointerUid { constructor(); }
	export class btPolarDecomposition {
		constructor(tolerance?: any, maxIterations?: number); m_tolerance: any;
		m_maxIterations: number;
		decompose(a?: btMatrix3x3, u?: btMatrix3x3, h?: btMatrix3x3): number;
		maxIterations(): number;
	}
	export class btPolyhedralContactClipping { constructor(); }
	export class btPolyhedralConvexAabbCachingShape {
		constructor(); m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_isLocalAabbValid: boolean;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		setLocalScaling(scaling?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
		setCachedLocalAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getCachedLocalAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		btConvexInternalShape(): any;
	}
	export class btPolyhedralConvexShape {
		constructor(); m_polyhedron: btConvexPolyhedron;
		m_localScaling: btVector3;
		m_implicitShapeDimensions: btVector3;
		m_collisionMargin: any;
		m_padding: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getName(): any;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btPoolAllocator {
		constructor(elemSize?: number, maxElements?: number); m_elemSize: number;
		m_maxElements: number;
		m_freeCount: number;
		m_firstFree: any;
		m_pool: any;
		getFreeCount(): number;
		getUsedCount(): number;
		getMaxCount(): number;
		allocate(size?: number): any;
		validPtr(ptr?: void): boolean;
		freeMemory(ptr?: void): void;
		getElementSize(): number;
		getPoolAddress(): any;
		getPoolAddress(): any;
	}
	export class btPositionAndRadius {
		constructor(); m_pos: btVector3FloatData;
		m_radius: number;
	}
	export class btPrimitiveManagerBase {
		constructor(); is_trimesh(): boolean;
		get_primitive_count(): number;
		get_primitive_box(prim_index?: number, primbox?: btAABB): void;
		get_primitive_triangle(prim_index?: number, triangle?: btPrimitiveTriangle): void;
	}
	export class btPrimitiveTriangle {
		constructor(); m_vertices: btVector3;
		m_plane: btVector4;
		m_margin: any;
		m_dummy: any;
		buildTriPlane(): void;
		overlap_test_conservative(other?: btPrimitiveTriangle): boolean;
		get_edge_plane(edge_index?: number, plane?: btVector4): void;
		applyTransform(t?: btTransform): void;
		clip_triangle(other?: btPrimitiveTriangle, clipped_points?: btVector3): number;
		find_triangle_collision_clip_method(other?: btPrimitiveTriangle, contacts?: any): boolean;
	}
	export class btQuadWord {
		constructor(_x?: any, _y?: any, _z?: any, _w?: any); m_floats: any;
		getX(): any;
		getY(): any;
		getZ(): any;
		setX(_x?: any): void;
		setY(_y?: any): void;
		setZ(_z?: any): void;
		setW(_w?: any): void;
		x(): any;
		y(): any;
		z(): any;
		w(): any;
		operator(): any;
		operator(): any;
		setValue(_x?: any, _y?: any, _z?: any): void;
		setValue(_x?: any, _y?: any, _z?: any, _w?: any): void;
		setMax(other?: btQuadWord): void;
		setMin(other?: btQuadWord): void;
	}
	export class btQuantizedBvh {
		constructor(other?: btQuantizedBvh, ownsMemory?: boolean); m_bvhAabbMin: btVector3;
		m_bvhAabbMax: btVector3;
		m_bvhQuantization: btVector3;
		m_bulletVersion: number;
		m_curNodeIndex: number;
		m_useQuantization: boolean;
		m_leafNodes: any;
		m_contiguousNodes: any;
		m_quantizedLeafNodes: any;
		m_quantizedContiguousNodes: any;
		m_traversalMode: any;
		m_SubtreeHeaders: any;
		m_subtreeHeaderCount: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setQuantizationValues(bvhAabbMin?: btVector3, bvhAabbMax?: btVector3, quantizationMargin?: any): void;
		getLeafNodeArray(): any;
		buildInternal(): void;
		reportAabbOverlappingNodex(nodeCallback?: btNodeOverlapCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		reportRayOverlappingNodex(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3): void;
		reportBoxCastOverlappingNodex(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3): void;
		quantize(out?: number, point?: btVector3, isMax?: number): void;
		quantizeWithClamp(out?: number, point2?: btVector3, isMax?: number): void;
		unQuantize(vecIn?: number): btVector3;
		setTraversalMode(traversalMode?: any): void;
		getQuantizedNodeArray(): any;
		getSubtreeInfoArray(): any;
		calculateSerializeBufferSize(): any;
		serialize(o_alignedDataBuffer?: void, i_dataBufferSize?: any, i_swapEndian?: boolean): boolean;
		calculateSerializeBufferSizeNew(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerializeFloat(quantizedBvhFloatData?: btQuantizedBvhFloatData): void;
		deSerializeDouble(quantizedBvhDoubleData?: btQuantizedBvhDoubleData): void;
		isQuantized(): boolean;
		setInternalNodeAabbMin(nodeIndex?: number, aabbMin?: btVector3): void;
		setInternalNodeAabbMax(nodeIndex?: number, aabbMax?: btVector3): void;
		getAabbMin(nodeIndex?: number): btVector3;
		getAabbMax(nodeIndex?: number): btVector3;
		setInternalNodeEscapeIndex(nodeIndex?: number, escapeIndex?: number): void;
		mergeInternalNodeAabb(nodeIndex?: number, newAabbMin?: btVector3, newAabbMax?: btVector3): void;
		swapLeafNodes(firstIndex?: number, secondIndex?: number): void;
		assignInternalNodeFromLeafNode(internalNode?: number, leafNodeIndex?: number): void;
		buildTree(startIndex?: number, endIndex?: number): void;
		calcSplittingAxis(startIndex?: number, endIndex?: number): number;
		sortAndCalcSplittingIndex(startIndex?: number, endIndex?: number, splitAxis?: number): number;
		walkStacklessTree(nodeCallback?: btNodeOverlapCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		walkStacklessQuantizedTreeAgainstRay(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3, startNodeIndex?: number, endNodeIndex?: number): void;
		walkStacklessQuantizedTree(nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number, startNodeIndex?: number, endNodeIndex?: number): void;
		walkStacklessTreeAgainstRay(nodeCallback?: btNodeOverlapCallback, raySource?: btVector3, rayTarget?: btVector3, aabbMin?: btVector3, aabbMax?: btVector3, startNodeIndex?: number, endNodeIndex?: number): void;
		walkStacklessQuantizedTreeCacheFriendly(nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number): void;
		walkRecursiveQuantizedTreeAgainstQueryAabb(currentNode?: btQuantizedBvhNode, nodeCallback?: btNodeOverlapCallback, quantizedQueryAabbMin?: number, quantizedQueryAabbMax?: number): void;
		walkRecursiveQuantizedTreeAgainstQuantizedTree(treeNodeA?: btQuantizedBvhNode, treeNodeB?: btQuantizedBvhNode, nodeCallback?: btNodeOverlapCallback): void;
		updateSubtreeHeaders(leftChildNodexIndex?: number, rightChildNodexIndex?: number): void;
	}
	export class btQuantizedBvhDoubleData {
		constructor(); m_bvhAabbMin: btVector3DoubleData;
		m_bvhAabbMax: btVector3DoubleData;
		m_bvhQuantization: btVector3DoubleData;
		m_curNodeIndex: number;
		m_useQuantization: number;
		m_numContiguousLeafNodes: number;
		m_numQuantizedContiguousNodes: number;
		m_contiguousNodesPtr: btOptimizedBvhNodeDoubleData;
		m_quantizedContiguousNodesPtr: btQuantizedBvhNodeData;
		m_traversalMode: number;
		m_numSubtreeHeaders: number;
		m_subTreeInfoPtr: btBvhSubtreeInfoData;
	}
	export class btQuantizedBvhFloatData {
		constructor(); m_bvhAabbMin: btVector3FloatData;
		m_bvhAabbMax: btVector3FloatData;
		m_bvhQuantization: btVector3FloatData;
		m_curNodeIndex: number;
		m_useQuantization: number;
		m_numContiguousLeafNodes: number;
		m_numQuantizedContiguousNodes: number;
		m_contiguousNodesPtr: btOptimizedBvhNodeFloatData;
		m_quantizedContiguousNodesPtr: btQuantizedBvhNodeData;
		m_subTreeInfoPtr: btBvhSubtreeInfoData;
		m_traversalMode: number;
		m_numSubtreeHeaders: number;
	}
	export class btQuantizedBvhNode {
		constructor(); m_quantizedAabbMin: number;
		m_quantizedAabbMax: number;
		m_escapeIndexOrTriangleIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		isLeafNode(): boolean;
		getEscapeIndex(): number;
		getTriangleIndex(): number;
		getPartId(): number;
	}
	export class btQuantizedBvhNodeData {
		constructor(); m_quantizedAabbMin: number;
		m_quantizedAabbMax: number;
		m_escapeIndexOrTriangleIndex: number;
	}
	export class btQuantizedBvhTree {
		constructor(); m_num_nodes: number;
		m_node_array: any;
		m_global_bound: btAABB;
		m_bvhQuantization: btVector3;
		build_tree(primitive_boxes?: any): void;
		quantizePoint(quantizedpoint?: number, point?: btVector3): void;
		testQuantizedBoxOverlapp(node_index?: number, quantizedMin?: number, quantizedMax?: number): boolean;
		clearNodes(): void;
		getNodeCount(): number;
		isLeafNode(nodeindex?: number): boolean;
		getNodeData(nodeindex?: number): number;
		getNodeBound(nodeindex?: number, bound?: btAABB): void;
		setNodeBound(nodeindex?: number, bound?: btAABB): void;
		getLeftNode(nodeindex?: number): number;
		getRightNode(nodeindex?: number): number;
		getEscapeNodeIndex(nodeindex?: number): number;
		get_node_pointer(index?: number): any;
		calc_quantization(primitive_boxes?: any, boundMargin?: any): void;
		_sort_and_calc_splitting_index(primitive_boxes?: any, startIndex?: number, endIndex?: number, splitAxis?: number): number;
		_calc_splitting_axis(primitive_boxes?: any, startIndex?: number, endIndex?: number): number;
		_build_sub_tree(primitive_boxes?: any, startIndex?: number, endIndex?: number): void;
	}
	export class btQuaternion {
		constructor(_x?: any, _y?: any, _z?: any, _w?: any); setRotation(axis?: btVector3, _angle?: any): void;
		setEuler(yaw?: any, pitch?: any, roll?: any): void;
		setEulerZYX(yaw?: any, pitch?: any, roll?: any): void;
		dot(q?: btQuaternion): any;
		length2(): any;
		length(): any;
		normalize(): btQuaternion;
		normalized(): btQuaternion;
		angle(q?: btQuaternion): any;
		angleShortestPath(q?: btQuaternion): any;
		getAngle(): any;
		getAngleShortestPath(): any;
		getAxis(): btVector3;
		inverse(): btQuaternion;
		farthest(qd?: btQuaternion): btQuaternion;
		nearest(qd?: btQuaternion): btQuaternion;
		slerp(q?: btQuaternion, t?: any): btQuaternion;
		getW(): any;
		serialize(dataOut?: any): void;
		deSerialize(dataIn?: any): void;
		serializeFloat(dataOut?: btQuaternionFloatData): void;
		deSerializeFloat(dataIn?: btQuaternionFloatData): void;
		serializeDouble(dataOut?: btQuaternionDoubleData): void;
		deSerializeDouble(dataIn?: btQuaternionDoubleData): void;
		getX(): any;
		getY(): any;
		getZ(): any;
		setX(_x?: any): void;
		setY(_y?: any): void;
		setZ(_z?: any): void;
		setW(_w?: any): void;
		x(): any;
		y(): any;
		z(): any;
		w(): any;
		operator(): any;
		operator(): any;
		setValue(_x?: any, _y?: any, _z?: any): void;
		setValue(_x?: any, _y?: any, _z?: any, _w?: any): void;
		btQuadWord(): any;
		btQuadWord(_x?: any, _y?: any, _z?: any): any;
		btQuadWord(_x?: any, _y?: any, _z?: any, _w?: any): any;
		setMax(other?: btQuadWord): void;
		setMin(other?: btQuadWord): void;
	}
	export class btQuaternionDoubleData {
		constructor(); m_floats: any;
	}
	export class btQuaternionFloatData {
		constructor(); m_floats: number;
	}
	export class btRaycastVehicle {
		constructor(tuning?: btVehicleTuning, chassis?: btRigidBody, raycaster?: btVehicleRaycaster); m_wheelInfo: any;
		m_forwardWS: any;
		m_axle: any;
		m_forwardImpulse: any;
		m_sideImpulse: any;
		m_userConstraintType: number;
		m_userConstraintId: number;
		m_tau: any;
		m_damping: any;
		m_vehicleRaycaster: btVehicleRaycaster;
		m_pitchControl: any;
		m_steeringValue: any;
		m_currentVehicleSpeedKmHour: any;
		m_chassisBody: btRigidBody;
		m_indexRightAxis: number;
		m_indexUpAxis: number;
		m_indexForwardAxis: number;
		updateAction(collisionWorld?: btCollisionWorld, step?: any): void;
		debugDraw(debugDrawer?: btIDebugDraw): void;
		getChassisWorldTransform(): btTransform;
		rayCast(wheel?: btWheelInfo): any;
		updateVehicle(step?: any): void;
		resetSuspension(): void;
		getSteeringValue(wheel?: number): any;
		setSteeringValue(steering?: any, wheel?: number): void;
		applyEngineForce(force?: any, wheel?: number): void;
		getWheelTransformWS(wheelIndex?: number): btTransform;
		updateWheelTransform(wheelIndex?: number, interpolatedTransform?: boolean): void;
		addWheel(connectionPointCS0?: btVector3, wheelDirectionCS0?: btVector3, wheelAxleCS?: btVector3, suspensionRestLength?: any, wheelRadius?: any, tuning?: btVehicleTuning, isFrontWheel?: boolean): btWheelInfo;
		getNumWheels(): number;
		getWheelInfo(index?: number): btWheelInfo;
		getWheelInfo(index?: number): btWheelInfo;
		updateWheelTransformsWS(wheel?: btWheelInfo, interpolatedTransform?: boolean): void;
		setBrake(brake?: any, wheelIndex?: number): void;
		setPitchControl(pitch?: any): void;
		updateSuspension(deltaTime?: any): void;
		updateFriction(timeStep?: any): void;
		getRigidBody(): btRigidBody;
		getRigidBody(): btRigidBody;
		getRightAxis(): number;
		getUpAxis(): number;
		getForwardAxis(): number;
		getForwardVector(): btVector3;
		getCurrentSpeedKmHour(): any;
		setCoordinateSystem(rightIndex?: number, upIndex?: number, forwardIndex?: number): void;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		btActionInterface(): any;
		defaultInit(tuning?: btVehicleTuning): void;
	}
	export class btRigidBody extends btCollisionObject {
		constructor(mass?: any, motionState?: btMotionState, collisionShape?: btCollisionShape, localInertia?: btVector3, a?: any, b?: any); m_contactSolverType: number;
		m_frictionSolverType: number;
		m_deltaLinearVelocity: btVector3;
		m_deltaAngularVelocity: btVector3;
		m_angularFactor: btVector3;
		m_invMass: btVector3;
		m_pushVelocity: btVector3;
		m_turnVelocity: btVector3;
		m_worldTransform: btTransform;
		m_interpolationWorldTransform: btTransform;
		m_interpolationLinearVelocity: btVector3;
		m_interpolationAngularVelocity: btVector3;
		m_anisotropicFriction: btVector3;
		m_hasAnisotropicFriction: number;
		m_contactProcessingThreshold: any;
		m_broadphaseHandle: btBroadphaseProxy;
		m_collisionShape: btCollisionShape;
		m_extensionPointer: any;
		m_rootCollisionShape: btCollisionShape;
		m_collisionFlags: number;
		m_islandTag1: number;
		m_companionId: number;
		m_activationState1: number;
		m_deactivationTime: any;
		m_friction: any;
		m_restitution: any;
		m_rollingFriction: any;
		m_internalType: number;
		m_userObjectPointer: any;
		m_userIndex: number;
		m_hitFraction: any;
		m_ccdSweptSphereRadius: any;
		m_ccdMotionThreshold: any;
		m_checkCollideWith: number;
		m_objectsWithoutCollisionCheck: any;
		m_updateRevision: number;
		m_invInertiaTensorWorld: btMatrix3x3;
		m_linearVelocity: btVector3;
		m_angularVelocity: btVector3;
		m_inverseMass: any;
		m_linearFactor: btVector3;
		m_gravity: btVector3;
		m_gravity_acceleration: btVector3;
		m_invInertiaLocal: btVector3;
		m_totalForce: btVector3;
		m_totalTorque: btVector3;
		m_linearDamping: any;
		m_angularDamping: any;
		m_additionalDamping: boolean;
		m_additionalDampingFactor: any;
		m_additionalLinearDampingThresholdSqr: any;
		m_additionalAngularDampingThresholdSqr: any;
		m_additionalAngularDampingFactor: any;
		m_linearSleepingThreshold: any;
		m_angularSleepingThreshold: any;
		m_optionalMotionState: btMotionState;
		m_constraintRefs: any;
		m_rigidbodyFlags: number;
		m_debugBodyId: number;
		proceedToTransform(newTrans?: btTransform): void;
		predictIntegratedTransform(step?: any, predictedTransform?: btTransform): void;
		saveKinematicState(step?: any): void;
		applyGravity(): void;
		setGravity(acceleration?: btVector3): void;
		getGravity(): btVector3;
		setDamping(lin_damping?: any, ang_damping?: any): void;
		getLinearDamping(): any;
		getAngularDamping(): any;
		getLinearSleepingThreshold(): any;
		getAngularSleepingThreshold(): any;
		applyDamping(timeStep?: any): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setMassProps(mass?: any, inertia?: btVector3): void;
		getLinearFactor(): btVector3;
		setLinearFactor(linearFactor?: btVector3): void;
		getInvMass(): any;
		getInvInertiaTensorWorld(): btMatrix3x3;
		integrateVelocities(step?: any): void;
		setCenterOfMassTransform(xform?: btTransform): void;
		applyCentralForce(force?: btVector3): void;
		getTotalForce(): btVector3;
		getTotalTorque(): btVector3;
		getInvInertiaDiagLocal(): btVector3;
		setInvInertiaDiagLocal(diagInvInertia?: btVector3): void;
		setSleepingThresholds(linear?: any, angular?: any): void;
		applyTorque(torque?: btVector3): void;
		applyForce(force?: btVector3, rel_pos?: btVector3): void;
		applyCentralImpulse(impulse?: btVector3): void;
		applyTorqueImpulse(torque?: btVector3): void;
		applyImpulse(impulse?: btVector3, rel_pos?: btVector3): void;
		clearForces(): void;
		updateInertiaTensor(): void;
		getCenterOfMassPosition(): btVector3;
		getOrientation(): btQuaternion;
		getCenterOfMassTransform(): btTransform;
		getLinearVelocity(): btVector3;
		getAngularVelocity(): btVector3;
		setLinearVelocity(lin_vel?: btVector3): void;
		setAngularVelocity(ang_vel?: btVector3): void;
		getVelocityInLocalPoint(rel_pos?: btVector3): btVector3;
		translate(v?: btVector3): void;
		getAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		computeImpulseDenominator(pos?: btVector3, normal?: btVector3): any;
		computeAngularImpulseDenominator(axis?: btVector3): any;
		updateDeactivation(timeStep?: any): void;
		wantsSleeping(): boolean;
		getBroadphaseProxy(): btBroadphaseProxy;
		getBroadphaseProxy(): btBroadphaseProxy;
		setNewBroadphaseProxy(broadphaseProxy?: btBroadphaseProxy): void;
		getMotionState(): btMotionState;
		getMotionState(): btMotionState;
		setMotionState(motionState?: btMotionState): void;
		setAngularFactor(angFac?: btVector3): void;
		setAngularFactor(angFac?: any): void;
		getAngularFactor(): btVector3;
		isInWorld(): boolean;
		addConstraintRef(c?: btTypedConstraint): void;
		removeConstraintRef(c?: btTypedConstraint): void;
		getConstraintRef(index?: number): btTypedConstraint;
		getNumConstraintRefs(): number;
		setFlags(flags?: number): void;
		getFlags(): number;
		computeGyroscopicImpulseImplicit_World(dt?: any): btVector3;
		computeGyroscopicImpulseImplicit_Body(step?: any): btVector3;
		computeGyroscopicForceExplicit(maxGyroscopicForce?: any): btVector3;
		getLocalInertia(): btVector3;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleObject(serializer?: btSerializer): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		btCollisionObject(): any;
		btCollisionObject(): any;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		setupRigidBody(constructionInfo?: btRigidBodyConstructionInfo): void;
	}
	export class btRigidBodyConstructionInfo {
		constructor(mass?: any, motionState?: btMotionState, collisionShape?: any, localInertia?: btVector3, a?: any, b?: any); m_mass: any;
		m_motionState: btMotionState;
		m_startWorldTransform: btTransform;
		m_collisionShape: btCollisionShape;
		m_localInertia: btVector3;
		m_linearDamping: any;
		m_angularDamping: any;
		m_friction: any;
		m_rollingFriction: any;
		m_restitution: any;
		m_linearSleepingThreshold: any;
		m_angularSleepingThreshold: any;
		m_additionalDamping: boolean;
		m_additionalDampingFactor: any;
		m_additionalLinearDampingThresholdSqr: any;
		m_additionalAngularDampingThresholdSqr: any;
		m_additionalAngularDampingFactor: any;
	}
	export class btRigidBodyDoubleData {
		constructor(); m_collisionObjectData: btCollisionObjectDoubleData;
		m_invInertiaTensorWorld: btMatrix3x3DoubleData;
		m_linearVelocity: btVector3DoubleData;
		m_angularVelocity: btVector3DoubleData;
		m_angularFactor: btVector3DoubleData;
		m_linearFactor: btVector3DoubleData;
		m_gravity: btVector3DoubleData;
		m_gravity_acceleration: btVector3DoubleData;
		m_invInertiaLocal: btVector3DoubleData;
		m_totalForce: btVector3DoubleData;
		m_totalTorque: btVector3DoubleData;
		m_inverseMass: any;
		m_linearDamping: any;
		m_angularDamping: any;
		m_additionalDampingFactor: any;
		m_additionalLinearDampingThresholdSqr: any;
		m_additionalAngularDampingThresholdSqr: any;
		m_additionalAngularDampingFactor: any;
		m_linearSleepingThreshold: any;
		m_angularSleepingThreshold: any;
		m_additionalDamping: number;
		m_padding: string;
	}
	export class btRigidBodyFloatData {
		constructor(); m_collisionObjectData: btCollisionObjectFloatData;
		m_invInertiaTensorWorld: btMatrix3x3FloatData;
		m_linearVelocity: btVector3FloatData;
		m_angularVelocity: btVector3FloatData;
		m_angularFactor: btVector3FloatData;
		m_linearFactor: btVector3FloatData;
		m_gravity: btVector3FloatData;
		m_gravity_acceleration: btVector3FloatData;
		m_invInertiaLocal: btVector3FloatData;
		m_totalForce: btVector3FloatData;
		m_totalTorque: btVector3FloatData;
		m_inverseMass: number;
		m_linearDamping: number;
		m_angularDamping: number;
		m_additionalDampingFactor: number;
		m_additionalLinearDampingThresholdSqr: number;
		m_additionalAngularDampingThresholdSqr: number;
		m_additionalAngularDampingFactor: number;
		m_linearSleepingThreshold: number;
		m_angularSleepingThreshold: number;
		m_additionalDamping: number;
	}
	export class btRotationalLimitMotor {
		constructor(limot?: btRotationalLimitMotor); m_loLimit: any;
		m_hiLimit: any;
		m_targetVelocity: any;
		m_maxMotorForce: any;
		m_maxLimitForce: any;
		m_damping: any;
		m_limitSoftness: any;
		m_normalCFM: any;
		m_stopERP: any;
		m_stopCFM: any;
		m_bounce: any;
		m_enableMotor: boolean;
		m_currentLimitError: any;
		m_currentPosition: any;
		m_currentLimit: number;
		m_accumulatedImpulse: any;
		isLimited(): boolean;
		needApplyTorques(): boolean;
		testLimitValue(test_value?: any): number;
		solveAngularLimits(timeStep?: any, axis?: btVector3, jacDiagABInv?: any, body0?: btRigidBody, body1?: btRigidBody): any;
	}
	export class btRotationalLimitMotor2 {
		constructor(limot?: btRotationalLimitMotor2); m_loLimit: any;
		m_hiLimit: any;
		m_bounce: any;
		m_stopERP: any;
		m_stopCFM: any;
		m_motorERP: any;
		m_motorCFM: any;
		m_enableMotor: boolean;
		m_targetVelocity: any;
		m_maxMotorForce: any;
		m_servoMotor: boolean;
		m_servoTarget: any;
		m_enableSpring: boolean;
		m_springStiffness: any;
		m_springStiffnessLimited: boolean;
		m_springDamping: any;
		m_springDampingLimited: boolean;
		m_equilibriumPoint: any;
		m_currentLimitError: any;
		m_currentLimitErrorHi: any;
		m_currentPosition: any;
		m_currentLimit: number;
		isLimited(): boolean;
		testLimitValue(test_value?: any): void;
	}
	export class btScaledBvhTriangleMeshShape {
		constructor(childShape?: btBvhTriangleMeshShape, localScaling?: btVector3); m_localScaling: btVector3;
		m_bvhTriMeshShape: btBvhTriangleMeshShape;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getChildShape(): btBvhTriangleMeshShape;
		getChildShape(): btBvhTriangleMeshShape;
		getName(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btScaledTriangleCallback {
		constructor(originalCallback?: btTriangleCallback, localScaling?: btVector3); m_originalCallback: btTriangleCallback;
		m_localScaling: btVector3;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btTriangleCallback(): any;
	}
	export class btScaledTriangleMeshShapeData {
		constructor(); m_trimeshShapeData: btTriangleMeshShapeData;
		m_localScaling: btVector3FloatData;
	}
	export class btSequentialImpulseConstraintSolver {
		constructor(); m_tmpSolverBodyPool: any;
		m_tmpSolverContactConstraintPool: any;
		m_tmpSolverNonContactConstraintPool: any;
		m_tmpSolverContactFrictionConstraintPool: any;
		m_tmpSolverContactRollingFrictionConstraintPool: any;
		m_orderTmpConstraintPool: any;
		m_orderNonContactConstraintPool: any;
		m_orderFrictionConstraintPool: any;
		m_tmpConstraintSizesPool: any;
		m_maxOverrideNumSolverIterations: number;
		m_fixedBodyId: number;
		m_resolveSingleConstraintRowGeneric: any;
		m_resolveSingleConstraintRowLowerLimit: any;
		m_btSeed2: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		solveGroup(bodies?: btCollisionObject, numBodies?: number, manifold?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, info?: btContactSolverInfo, debugDrawer?: btIDebugDraw, dispatcher?: btDispatcher): any;
		reset(): void;
		btRand2(): number;
		btRandInt2(n?: number): number;
		setRandSeed(seed?: number): void;
		getRandSeed(): number;
		getSolverType(): any;
		getActiveConstraintRowSolverGeneric(): any;
		setConstraintRowSolverGeneric(rowSolver?: any): void;
		getActiveConstraintRowSolverLowerLimit(): any;
		setConstraintRowSolverLowerLimit(rowSolver?: any): void;
		getScalarConstraintRowSolverGeneric(): any;
		getSSE2ConstraintRowSolverGeneric(): any;
		getSSE4_1ConstraintRowSolverGeneric(): any;
		getScalarConstraintRowSolverLowerLimit(): any;
		getSSE2ConstraintRowSolverLowerLimit(): any;
		getSSE4_1ConstraintRowSolverLowerLimit(): any;
		btConstraintSolver(): any;
		prepareSolve(a?: any, b?: any): void;
		allSolved(arg1?: btContactSolverInfo, arg2?: btIDebugDraw): void;
		setupFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		setupRollingFrictionConstraint(solverConstraint?: btSolverConstraint, normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): void;
		addFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		addRollingFrictionConstraint(normalAxis?: btVector3, solverBodyIdA?: number, solverBodyIdB?: number, frictionIndex?: number, cp?: btManifoldPoint, rel_pos1?: btVector3, rel_pos2?: btVector3, colObj0?: btCollisionObject, colObj1?: btCollisionObject, relaxation?: any, desiredVelocity?: any, cfmSlip?: any): btSolverConstraint;
		setupContactConstraint(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo, relaxation?: any, rel_pos1?: btVector3, rel_pos2?: btVector3): void;
		setFrictionConstraintImpulse(solverConstraint?: btSolverConstraint, solverBodyIdA?: number, solverBodyIdB?: number, cp?: btManifoldPoint, infoGlobal?: btContactSolverInfo): void;
		restitutionCurve(rel_vel?: any, restitution?: any): any;
		convertContacts(manifoldPtr?: btPersistentManifold, numManifolds?: number, infoGlobal?: btContactSolverInfo): void;
		convertContact(manifold?: btPersistentManifold, infoGlobal?: btContactSolverInfo): void;
		resolveSplitPenetrationSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		resolveSplitPenetrationImpulseCacheFriendly(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): void;
		getOrInitSolverBody(body?: btCollisionObject, timeStep?: any): number;
		initSolverBody(solverBody?: btSolverBody, collisionObject?: btCollisionObject, timeStep?: any): void;
		resolveSingleConstraintRowGeneric(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowGenericSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimit(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		resolveSingleConstraintRowLowerLimitSIMD(bodyA?: btSolverBody, bodyB?: btSolverBody, contactConstraint?: btSolverConstraint): any;
		solveGroupCacheFriendlySplitImpulseIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): void;
		solveGroupCacheFriendlyFinish(bodies?: btCollisionObject, numBodies?: number, infoGlobal?: btContactSolverInfo): any;
		solveSingleIteration(iteration?: number, bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		solveGroupCacheFriendlySetup(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
		solveGroupCacheFriendlyIterations(bodies?: btCollisionObject, numBodies?: number, manifoldPtr?: btPersistentManifold, numManifolds?: number, constraints?: btTypedConstraint, numConstraints?: number, infoGlobal?: btContactSolverInfo, debugDrawer?: btIDebugDraw): any;
	}
	export class btSerializer {
		constructor(); getBufferPointer(): any;
		getCurrentBufferSize(): number;
		allocate(size?: any, numElements?: number): btChunk;
		finalizeChunk(chunk?: btChunk, structType?: string, chunkCode?: number, oldPtr?: void): void;
		findPointer(oldPtr?: void): any;
		getUniquePointer(oldPtr?: void): any;
		startSerialization(): void;
		finishSerialization(): void;
		findNameForPointer(ptr?: void): any;
		registerNameForPointer(ptr?: void, name?: string): void;
		serializeName(ptr?: string): void;
		getSerializationFlags(): number;
		setSerializationFlags(flags?: number): void;
		getNumChunks(): number;
		getChunk(chunkIndex?: number): btChunk;
	}
	export class btShapeHull {
		constructor(shape?: btConvexShape); m_vertices: any;
		m_indices: any;
		m_numIndices: number;
		m_shape: btConvexShape;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		buildHull(margin?: any): boolean;
		numTriangles(): number;
		numVertices(): number;
		numIndices(): number;
		getVertexPointer(): btVector3;
		getIndexPointer(): any;
	}
	export class btShortIntIndexData {
		constructor(); m_value: number;
		m_pad: string;
	}
	export class btShortIntIndexTripletData {
		constructor(); m_values: number;
		m_pad: string;
	}
	export class btSimpleBroadphase {
		constructor(maxProxies?: number, overlappingPairCache?: btOverlappingPairCache); m_numHandles: number;
		m_maxHandles: number;
		m_LastHandleIndex: number;
		m_pHandles: btSimpleBroadphaseProxy;
		m_pHandlesRawPtr: any;
		m_firstFreeHandle: number;
		m_pairCache: btOverlappingPairCache;
		m_ownsPairCache: boolean;
		m_invalidPair: number;
		createProxy(aabbMin?: btVector3, aabbMax?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, dispatcher?: btDispatcher, multiSapProxy?: void): btBroadphaseProxy;
		calculateOverlappingPairs(dispatcher?: btDispatcher): void;
		destroyProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		setAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3, dispatcher?: btDispatcher): void;
		getAabb(proxy?: btBroadphaseProxy, aabbMin?: btVector3, aabbMax?: btVector3): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, rayCallback?: btBroadphaseRayCallback, aabbMin?: btVector3, a?: any, b?: any): void;
		aabbTest(aabbMin?: btVector3, aabbMax?: btVector3, callback?: btBroadphaseAabbCallback): void;
		getOverlappingPairCache(): btOverlappingPairCache;
		getOverlappingPairCache(): btOverlappingPairCache;
		testAabbOverlap(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		getBroadphaseAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		printStats(): void;
		btBroadphaseInterface(): any;
		allocHandle(): number;
		freeHandle(proxy?: btSimpleBroadphaseProxy): void;
		getSimpleProxyFromProxy(proxy?: btBroadphaseProxy): btSimpleBroadphaseProxy;
		getSimpleProxyFromProxy(proxy?: btBroadphaseProxy): btSimpleBroadphaseProxy;
		resetPool(dispatcher?: btDispatcher): void;
		validate(): void;
	}
	export class btSimpleBroadphaseProxy {
		constructor(minpt?: btVector3, maxpt?: btVector3, shapeType?: number, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapProxy?: void); m_nextFree: number;
		m_clientObject: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_multiSapParentProxy: any;
		m_uniqueId: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		SetNextFree(next?: number): void;
		GetNextFree(): number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getUid(): number;
		btBroadphaseProxy(): any;
		btBroadphaseProxy(aabbMin?: btVector3, aabbMax?: btVector3, userPtr?: void, collisionFilterGroup?: number, collisionFilterMask?: number, multiSapParentProxy?: void): any;
	}
	export class btSimpleDynamicsWorld {
		constructor(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration); m_constraintSolver: btConstraintSolver;
		m_ownsConstraintSolver: boolean;
		m_gravity: btVector3;
		m_internalTickCallback: any;
		m_internalPreTickCallback: any;
		m_worldUserInfo: any;
		m_solverInfo: btContactSolverInfo;
		m_collisionObjects: any;
		m_dispatcher1: btDispatcher;
		m_dispatchInfo: btDispatcherInfo;
		m_broadphasePairCache: btBroadphaseInterface;
		m_debugDrawer: btIDebugDraw;
		m_forceUpdateAllAabbs: boolean;
		stepSimulation(timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any): number;
		setGravity(gravity?: btVector3): void;
		getGravity(): btVector3;
		addRigidBody(body?: btRigidBody): void;
		addRigidBody(body?: btRigidBody, group?: number, mask?: number): void;
		removeRigidBody(body?: btRigidBody): void;
		debugDrawWorld(): void;
		addAction(action?: btActionInterface): void;
		removeAction(action?: btActionInterface): void;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		updateAabbs(): void;
		synchronizeMotionStates(): void;
		setConstraintSolver(solver?: btConstraintSolver): void;
		getConstraintSolver(): btConstraintSolver;
		getWorldType(): any;
		clearForces(): void;
		btDynamicsWorld(dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btDynamicsWorld(): any;
		addConstraint(constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean): void;
		removeConstraint(constraint?: btTypedConstraint): void;
		getNumConstraints(): number;
		getConstraint(index?: number): btTypedConstraint;
		getConstraint(index?: number): btTypedConstraint;
		setInternalTickCallback(cb?: any, worldUserInfo?: void, isPreTick?: boolean): void;
		setWorldUserInfo(worldUserInfo?: void): void;
		getWorldUserInfo(): any;
		getSolverInfo(): btContactSolverInfo;
		addVehicle(vehicle?: btActionInterface): void;
		removeVehicle(vehicle?: btActionInterface): void;
		addCharacter(character?: btActionInterface): void;
		removeCharacter(character?: btActionInterface): void;
		btCollisionWorld(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btCollisionWorld(): any;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		serialize(serializer?: btSerializer): void;
		predictUnconstraintMotion(timeStep?: any): void;
		integrateTransforms(timeStep?: any): void;
		serializeCollisionObjects(serializer?: btSerializer): void;
	}
	export class btSimplePair {
		constructor(indexA?: number, indexB?: number); m_indexA: number;
		m_indexB: number;
	}
	export class btSimulationIslandManager {
		constructor(); m_unionFind: btUnionFind;
		m_islandmanifold: any;
		m_islandBodies: any;
		m_splitIslands: boolean;
		initUnionFind(n?: number): void;
		getUnionFind(): btUnionFind;
		updateActivationState(colWorld?: btCollisionWorld, dispatcher?: btDispatcher): void;
		storeIslandActivationState(world?: btCollisionWorld): void;
		findUnions(dispatcher?: btDispatcher, colWorld?: btCollisionWorld): void;
		buildAndProcessIslands(dispatcher?: btDispatcher, collisionWorld?: btCollisionWorld, callback?: any): void;
		buildIslands(dispatcher?: btDispatcher, colWorld?: btCollisionWorld): void;
		getSplitIslands(): boolean;
		setSplitIslands(doSplitIslands?: boolean): void;
	}
	export class btSingleContactCallback {
		constructor(collisionObject?: btCollisionObject, world?: btCollisionWorld, resultCallback?: any); m_collisionObject: btCollisionObject;
		m_world: btCollisionWorld;
		m_resultCallback: any;
		process(proxy?: btBroadphaseProxy): boolean;
		btBroadphaseAabbCallback(): any;
	}
	export class btSingleRayCallback {
		constructor(rayFromWorld?: btVector3, rayToWorld?: btVector3, world?: btCollisionWorld, resultCallback?: any); m_rayFromWorld: btVector3;
		m_rayToWorld: btVector3;
		m_rayFromTrans: btTransform;
		m_rayToTrans: btTransform;
		m_hitNormal: btVector3;
		m_world: btCollisionWorld;
		m_resultCallback: any;
		m_rayDirectionInverse: btVector3;
		m_signs: number;
		m_lambda_max: any;
		process(proxy?: btBroadphaseProxy): boolean;
		btBroadphaseRayCallback(): any;
		btBroadphaseAabbCallback(): any;
	}
	export class btSingleSweepCallback {
		constructor(castShape?: btConvexShape, convexFromTrans?: btTransform, convexToTrans?: btTransform, world?: btCollisionWorld, resultCallback?: any, allowedPenetration?: any); m_convexFromTrans: btTransform;
		m_convexToTrans: btTransform;
		m_hitNormal: btVector3;
		m_world: btCollisionWorld;
		m_resultCallback: any;
		m_allowedCcdPenetration: any;
		m_castShape: btConvexShape;
		m_rayDirectionInverse: btVector3;
		m_signs: number;
		m_lambda_max: any;
		process(proxy?: btBroadphaseProxy): boolean;
		btBroadphaseRayCallback(): any;
		btBroadphaseAabbCallback(): any;
	}
	export class btSliderConstraint extends btTypedConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean); m_useSolveConstraintObsolete: boolean;
		m_useOffsetForConstraintFrame: boolean;
		m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_useLinearReferenceFrameA: boolean;
		m_lowerLinLimit: any;
		m_upperLinLimit: any;
		m_lowerAngLimit: any;
		m_upperAngLimit: any;
		m_softnessDirLin: any;
		m_restitutionDirLin: any;
		m_dampingDirLin: any;
		m_cfmDirLin: any;
		m_softnessDirAng: any;
		m_restitutionDirAng: any;
		m_dampingDirAng: any;
		m_cfmDirAng: any;
		m_softnessLimLin: any;
		m_restitutionLimLin: any;
		m_dampingLimLin: any;
		m_cfmLimLin: any;
		m_softnessLimAng: any;
		m_restitutionLimAng: any;
		m_dampingLimAng: any;
		m_cfmLimAng: any;
		m_softnessOrthoLin: any;
		m_restitutionOrthoLin: any;
		m_dampingOrthoLin: any;
		m_cfmOrthoLin: any;
		m_softnessOrthoAng: any;
		m_restitutionOrthoAng: any;
		m_dampingOrthoAng: any;
		m_cfmOrthoAng: any;
		m_solveLinLim: boolean;
		m_solveAngLim: boolean;
		m_flags: number;
		m_jacLin: btJacobianEntry;
		m_jacLinDiagABInv: any;
		m_jacAng: btJacobianEntry;
		m_timeStep: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_sliderAxis: btVector3;
		m_realPivotAInW: btVector3;
		m_realPivotBInW: btVector3;
		m_projPivotInW: btVector3;
		m_delta: btVector3;
		m_depth: btVector3;
		m_relPosA: btVector3;
		m_relPosB: btVector3;
		m_linPos: any;
		m_angPos: any;
		m_angDepth: any;
		m_kAngle: any;
		m_poweredLinMotor: boolean;
		m_targetLinMotorVelocity: any;
		m_maxLinMotorForce: any;
		m_accumulatedLinMotorImpulse: any;
		m_poweredAngMotor: boolean;
		m_targetAngMotorVelocity: any;
		m_maxAngMotorForce: any;
		m_accumulatedAngMotorImpulse: any;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, rbAinvMass?: any, rbBinvMass?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getLowerLinLimit(): any;
		setLowerLinLimit(lowerLimit?: any): void;
		getUpperLinLimit(): any;
		setUpperLinLimit(upperLimit?: any): void;
		getLowerAngLimit(): any;
		setLowerAngLimit(lowerLimit?: any): void;
		getUpperAngLimit(): any;
		setUpperAngLimit(upperLimit?: any): void;
		getUseLinearReferenceFrameA(): boolean;
		getSoftnessDirLin(): any;
		getRestitutionDirLin(): any;
		getDampingDirLin(): any;
		getSoftnessDirAng(): any;
		getRestitutionDirAng(): any;
		getDampingDirAng(): any;
		getSoftnessLimLin(): any;
		getRestitutionLimLin(): any;
		getDampingLimLin(): any;
		getSoftnessLimAng(): any;
		getRestitutionLimAng(): any;
		getDampingLimAng(): any;
		getSoftnessOrthoLin(): any;
		getRestitutionOrthoLin(): any;
		getDampingOrthoLin(): any;
		getSoftnessOrthoAng(): any;
		getRestitutionOrthoAng(): any;
		getDampingOrthoAng(): any;
		setSoftnessDirLin(softnessDirLin?: any): void;
		setRestitutionDirLin(restitutionDirLin?: any): void;
		setDampingDirLin(dampingDirLin?: any): void;
		setSoftnessDirAng(softnessDirAng?: any): void;
		setRestitutionDirAng(restitutionDirAng?: any): void;
		setDampingDirAng(dampingDirAng?: any): void;
		setSoftnessLimLin(softnessLimLin?: any): void;
		setRestitutionLimLin(restitutionLimLin?: any): void;
		setDampingLimLin(dampingLimLin?: any): void;
		setSoftnessLimAng(softnessLimAng?: any): void;
		setRestitutionLimAng(restitutionLimAng?: any): void;
		setDampingLimAng(dampingLimAng?: any): void;
		setSoftnessOrthoLin(softnessOrthoLin?: any): void;
		setRestitutionOrthoLin(restitutionOrthoLin?: any): void;
		setDampingOrthoLin(dampingOrthoLin?: any): void;
		setSoftnessOrthoAng(softnessOrthoAng?: any): void;
		setRestitutionOrthoAng(restitutionOrthoAng?: any): void;
		setDampingOrthoAng(dampingOrthoAng?: any): void;
		setPoweredLinMotor(onOff?: boolean): void;
		getPoweredLinMotor(): boolean;
		setTargetLinMotorVelocity(targetLinMotorVelocity?: any): void;
		getTargetLinMotorVelocity(): any;
		setMaxLinMotorForce(maxLinMotorForce?: any): void;
		getMaxLinMotorForce(): any;
		setPoweredAngMotor(onOff?: boolean): void;
		getPoweredAngMotor(): boolean;
		setTargetAngMotorVelocity(targetAngMotorVelocity?: any): void;
		getTargetAngMotorVelocity(): any;
		setMaxAngMotorForce(maxAngMotorForce?: any): void;
		getMaxAngMotorForce(): any;
		getLinearPos(): any;
		getAngularPos(): any;
		getSolveLinLimit(): boolean;
		getLinDepth(): any;
		getSolveAngLimit(): boolean;
		getAngDepth(): any;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		testLinLimits(): void;
		testAngLimits(): void;
		getAncorInA(): btVector3;
		getAncorInB(): btVector3;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		buildJacobian(): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		initParams(): void;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btSliderConstraintData {
		constructor(); m_typeConstraintData: btTypedConstraintData;
		m_rbAFrame: btTransformFloatData;
		m_rbBFrame: btTransformFloatData;
		m_linearUpperLimit: number;
		m_linearLowerLimit: number;
		m_angularUpperLimit: number;
		m_angularLowerLimit: number;
		m_useLinearReferenceFrameA: number;
		m_useOffsetForConstraintFrame: number;
	}
	export class btSliderConstraintDoubleData {
		constructor(); m_typeConstraintData: btTypedConstraintDoubleData;
		m_rbAFrame: btTransformDoubleData;
		m_rbBFrame: btTransformDoubleData;
		m_linearUpperLimit: any;
		m_linearLowerLimit: any;
		m_angularUpperLimit: any;
		m_angularLowerLimit: any;
		m_useLinearReferenceFrameA: number;
		m_useOffsetForConstraintFrame: number;
	}
	export class btSoftBody {
		constructor(worldInfo?: btSoftBodyWorldInfo, node_count?: number, x?: btVector3, m?: any); m_collisionDisabledObjects: any;
		m_softBodySolver: btSoftBodySolver;
		m_cfg: any;
		m_sst: any;
		m_pose: any;
		m_tag: any;
		m_worldInfo: btSoftBodyWorldInfo;
		m_notes: any;
		m_nodes: any;
		m_links: any;
		m_faces: any;
		m_tetras: any;
		m_anchors: any;
		m_rcontacts: any;
		m_scontacts: any;
		m_joints: any;
		m_materials: any;
		m_timeacc: any;
		m_bounds: btVector3;
		m_bUpdateRtCst: boolean;
		m_ndbvt: btDbvt;
		m_fdbvt: btDbvt;
		m_cdbvt: btDbvt;
		m_clusters: any;
		m_clusterConnectivity: any;
		m_initialWorldTransform: btTransform;
		m_windVelocity: btVector3;
		m_restLengthScale: any;
		m_userIndexMapping: any;
		initDefaults(): void;
		getWorldInfo(): btSoftBodyWorldInfo;
		setCollisionShape(collisionShape?: btCollisionShape): void;
		checkLink(node0?: number, node1?: number): boolean;
		checkLink(node0?: any, node1?: any): boolean;
		checkFace(node0?: number, node1?: number, node2?: number): boolean;
		appendMaterial(): any;
		appendNote(text?: string, o?: btVector3, c?: btVector4, d?: any, e?: any, f?: any): void;
		appendNote(text?: string, o?: btVector3, feature?: any): void;
		appendNote(text?: string, o?: btVector3, feature?: any): void;
		appendNote(text?: string, o?: btVector3, feature?: any): void;
		appendNode(x?: btVector3, m?: any): void;
		appendLink(model?: number, mat?: any): void;
		appendLink(node0?: number, node1?: number, mat?: any, bcheckexist?: boolean): void;
		appendLink(node0?: any, node1?: any, mat?: any, bcheckexist?: boolean): void;
		appendFace(model?: number, mat?: any): void;
		appendFace(node0?: number, node1?: number, node2?: number, mat?: any): void;
		appendTetra(model?: number, mat?: any): void;
		appendTetra(node0?: number, node1?: number, node2?: number, node3?: number, mat?: any): void;
		appendAnchor(node?: number, body?: btRigidBody, disableCollisionBetweenLinkedBodies?: boolean, influence?: any): void;
		appendAnchor(node?: number, body?: btRigidBody, localPivot?: btVector3, disableCollisionBetweenLinkedBodies?: boolean, influence?: any): void;
		appendLinearJoint(specs?: any, body0?: any, body1?: any): void;
		appendLinearJoint(specs?: any, body?: any): void;
		appendLinearJoint(specs?: any, body?: btSoftBody): void;
		appendAngularJoint(specs?: any, body0?: any, body1?: any): void;
		appendAngularJoint(specs?: any, body?: any): void;
		appendAngularJoint(specs?: any, body?: btSoftBody): void;
		addForce(force?: btVector3): void;
		addForce(force?: btVector3, node?: number): void;
		addAeroForceToNode(windVelocity?: btVector3, nodeIndex?: number): void;
		addAeroForceToFace(windVelocity?: btVector3, faceIndex?: number): void;
		addVelocity(velocity?: btVector3): void;
		setVelocity(velocity?: btVector3): void;
		addVelocity(velocity?: btVector3, node?: number): void;
		setMass(node?: number, mass?: any): void;
		getMass(node?: number): any;
		getTotalMass(): any;
		setTotalMass(mass?: any, fromfaces?: boolean): void;
		setTotalDensity(density?: any): void;
		setVolumeMass(mass?: any): void;
		setVolumeDensity(density?: any): void;
		transform(trs?: btTransform): void;
		translate(trs?: btVector3): void;
		rotate(rot?: btQuaternion): void;
		scale(scl?: btVector3): void;
		getRestLengthScale(): any;
		setRestLengthScale(restLength?: any): void;
		setPose(bvolume?: boolean, bframe?: boolean): void;
		resetLinkRestLengths(): void;
		getVolume(): any;
		clusterCount(): number;
		clusterCom(cluster?: number): btVector3;
		generateBendingConstraints(distance?: number, mat?: any): number;
		randomizeConstraints(): void;
		releaseCluster(index?: number): void;
		releaseClusters(): void;
		generateClusters(k?: number, maxiterations?: number): number;
		refine(ifn?: any, accurary?: any, cut?: boolean): void;
		cutLink(node0?: number, node1?: number, position?: any): boolean;
		cutLink(node0?: any, node1?: any, position?: any): boolean;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, results?: any): boolean;
		setSolver(preset?: any): void;
		predictMotion(dt?: any): void;
		solveConstraints(): void;
		staticSolve(iterations?: number): void;
		integrateMotion(): void;
		defaultCollisionHandler(pcoWrap?: btCollisionObjectWrapper): void;
		defaultCollisionHandler(psb?: btSoftBody): void;
		setWindVelocity(velocity?: btVector3): void;
		getWindVelocity(): btVector3;
		setSoftBodySolver(softBodySolver?: btSoftBodySolver): void;
		getSoftBodySolver(): btSoftBodySolver;
		getSoftBodySolver(): btSoftBodySolver;
		getAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		pointersToIndices(): void;
		indicesToPointers(map?: number): void;
		rayTest(rayFrom?: btVector3, rayTo?: btVector3, mint?: any, feature?: any, index?: number, bcountonly?: boolean): number;
		initializeFaceTree(): void;
		evaluateCom(): btVector3;
		checkContact(colObjWrap?: btCollisionObjectWrapper, x?: btVector3, margin?: any, cti?: any): boolean;
		updateNormals(): void;
		updateBounds(): void;
		updatePose(): void;
		updateConstants(): void;
		updateLinkConstants(): void;
		updateArea(averageArea?: boolean): void;
		initializeClusters(): void;
		updateClusters(): void;
		cleanupClusters(): void;
		prepareClusters(iterations?: number): void;
		solveClusters(sor?: any): void;
		applyClusters(drift?: boolean): void;
		dampClusters(): void;
		applyForces(): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		mergesSimulationIslands(): boolean;
		getAnisotropicFriction(): btVector3;
		setAnisotropicFriction(anisotropicFriction?: btVector3, frictionMode?: number): void;
		hasAnisotropicFriction(frictionMode?: number): boolean;
		setContactProcessingThreshold(contactProcessingThreshold?: any): void;
		getContactProcessingThreshold(): any;
		isStaticObject(): boolean;
		isKinematicObject(): boolean;
		isStaticOrKinematicObject(): boolean;
		hasContactResponse(): boolean;
		btCollisionObject(): any;
		btCollisionObject(): any;
		getCollisionShape(): btCollisionShape;
		getCollisionShape(): btCollisionShape;
		setIgnoreCollisionCheck(co?: btCollisionObject, ignoreCollisionCheck?: boolean): void;
		checkCollideWithOverride(co?: btCollisionObject): boolean;
		internalGetExtensionPointer(): any;
		internalSetExtensionPointer(pointer?: void): void;
		getActivationState(): number;
		setActivationState(newState?: number): void;
		setDeactivationTime(time?: any): void;
		getDeactivationTime(): any;
		forceActivationState(newState?: number): void;
		activate(forceActivation?: boolean): void;
		isActive(): boolean;
		setRestitution(rest?: any): void;
		getRestitution(): any;
		setFriction(frict?: any): void;
		getFriction(): any;
		setRollingFriction(frict?: any): void;
		getRollingFriction(): any;
		getInternalType(): number;
		getWorldTransform(): btTransform;
		getWorldTransform(): btTransform;
		setWorldTransform(worldTrans?: btTransform): void;
		getBroadphaseHandle(): btBroadphaseProxy;
		getBroadphaseHandle(): btBroadphaseProxy;
		setBroadphaseHandle(handle?: btBroadphaseProxy): void;
		getInterpolationWorldTransform(): btTransform;
		getInterpolationWorldTransform(): btTransform;
		setInterpolationWorldTransform(trans?: btTransform): void;
		setInterpolationLinearVelocity(linvel?: btVector3): void;
		setInterpolationAngularVelocity(angvel?: btVector3): void;
		getInterpolationLinearVelocity(): btVector3;
		getInterpolationAngularVelocity(): btVector3;
		getIslandTag(): number;
		setIslandTag(tag?: number): void;
		getCompanionId(): number;
		setCompanionId(id?: number): void;
		getHitFraction(): any;
		setHitFraction(hitFraction?: any): void;
		getCollisionFlags(): number;
		setCollisionFlags(flags?: number): void;
		getCcdSweptSphereRadius(): any;
		setCcdSweptSphereRadius(radius?: any): void;
		getCcdMotionThreshold(): any;
		getCcdSquareMotionThreshold(): any;
		setCcdMotionThreshold(ccdMotionThreshold?: any): void;
		getUserPointer(): any;
		getUserIndex(): number;
		setUserPointer(userPointer?: void): void;
		setUserIndex(index?: number): void;
		getUpdateRevisionInternal(): number;
		checkCollideWith(co?: btCollisionObject): boolean;
		serializeSingleObject(serializer?: btSerializer): void;
	}
	export class btSoftBodyCollisionShape {
		constructor(backptr?: btSoftBody); m_body: btSoftBody;
		processAllTriangles(arg1?: btTriangleCallback, arg2?: btVector3, arg3?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(arg1?: btVector3): void;
		getLocalScaling(): btVector3;
		calculateLocalInertia(btScalar?: any, arg2?: btVector3): void;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btSoftBodyConcaveCollisionAlgorithm {
		constructor(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_isSwapped: boolean;
		m_btSoftBodyTriangleCallback: btSoftBodyTriangleCallback;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		clearCache(): void;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btSoftBodyFloatData {
		constructor(); m_collisionObjectData: btCollisionObjectFloatData;
		m_pose: any;
		m_materials: any;
		m_nodes: any;
		m_links: any;
		m_faces: any;
		m_tetrahedra: any;
		m_anchors: any;
		m_clusters: any;
		m_joints: btSoftBodyJointData;
		m_numMaterials: number;
		m_numNodes: number;
		m_numLinks: number;
		m_numFaces: number;
		m_numTetrahedra: number;
		m_numAnchors: number;
		m_numClusters: number;
		m_numJoints: number;
		m_config: any;
	}
	export class btSoftBodyHelpers { constructor(); }
	export class btSoftBodyJointData {
		constructor(); m_bodyA: any;
		m_bodyB: any;
		m_refs: btVector3FloatData;
		m_cfm: number;
		m_erp: number;
		m_split: number;
		m_delete: number;
		m_relPosition: btVector3FloatData;
		m_bodyAtype: number;
		m_bodyBtype: number;
		m_jointType: number;
		m_pad: number;
	}
	export class btSoftBodyRigidBodyCollisionConfiguration {
		constructor(constructionInfo?: btDefaultCollisionConstructionInfo); m_softSoftCreateFunc: btCollisionAlgorithmCreateFunc;
		m_softRigidConvexCreateFunc: btCollisionAlgorithmCreateFunc;
		m_swappedSoftRigidConvexCreateFunc: btCollisionAlgorithmCreateFunc;
		m_softRigidConcaveCreateFunc: btCollisionAlgorithmCreateFunc;
		m_swappedSoftRigidConcaveCreateFunc: btCollisionAlgorithmCreateFunc;
		getCollisionAlgorithmCreateFunc(proxyType0?: number, proxyType1?: number): btCollisionAlgorithmCreateFunc;
		btDefaultCollisionConfiguration(constructionInfo?: btDefaultCollisionConstructionInfo): any;
		btDefaultCollisionConfiguration(): any;
		getPersistentManifoldPool(): btPoolAllocator;
		getCollisionAlgorithmPool(): btPoolAllocator;
		getSimplexSolver(): btVoronoiSimplexSolver;
		setConvexConvexMultipointIterations(numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number): void;
		setPlaneConvexMultipointIterations(numPerturbationIterations?: number, minimumPointsPerturbationThreshold?: number): void;
		btCollisionConfiguration(): any;
	}
	export class btSoftBodySolver {
		constructor(); m_numberOfPositionIterations: number;
		m_numberOfVelocityIterations: number;
		m_timeScale: number;
		getSolverType(): any;
		checkInitialized(): boolean;
		optimize(softBodies?: any, forceUpdate?: boolean): void;
		copyBackToSoftBodies(bMove?: boolean): void;
		predictMotion(solverdt?: number): void;
		solveConstraints(solverdt?: number): void;
		updateSoftBodies(): void;
		processCollision(arg1?: btSoftBody, arg2?: btCollisionObjectWrapper): void;
		processCollision(arg1?: btSoftBody, arg2?: btSoftBody): void;
		setNumberOfPositionIterations(iterations?: number): void;
		getNumberOfPositionIterations(): number;
		setNumberOfVelocityIterations(iterations?: number): void;
		getNumberOfVelocityIterations(): number;
		getTimeScale(): number;
	}
	export class btSoftBodySolverOutput {
		constructor(); copySoftBodyToVertexBuffer(softBody?: any, vertexBuffer?: btVertexBufferDescriptor): void;
	}
	export class btSoftBodyTriangleCallback {
		constructor(dispatcher?: btDispatcher, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_triangleCount: number;
		m_softBody: btSoftBody;
		m_triBody: btCollisionObject;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		m_resultOut: btManifoldResult;
		m_dispatcher: btDispatcher;
		m_dispatchInfoPtr: btDispatcherInfo;
		m_collisionMarginTriangle: any;
		m_shapeCache: any;
		setTimeStepAndCounters(collisionMarginTriangle?: any, triObjWrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		clearCache(): void;
		getAabbMin(): btVector3;
		getAabbMax(): btVector3;
		btTriangleCallback(): any;
	}
	export class btSoftBodyWorldInfo {
		constructor(); air_density: any;
		water_density: any;
		water_offset: any;
		m_maxDisplacement: any;
		water_normal: btVector3;
		m_broadphase: btBroadphaseInterface;
		m_dispatcher: btDispatcher;
		m_gravity: btVector3;
		m_sparsesdf: any;

		//
		set_m_gravity(value: btVector3): void;
	}
	export class btSoftClusterCollisionShape {
		constructor(cluster?: any); m_cluster: any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getShapeType(): number;
		getName(): any;
		setMargin(margin?: any): void;
		getMargin(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btSoftColliders { constructor(); }
	export class btSoftRigidCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, col0?: btCollisionObjectWrapper, col1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_softBody: btSoftBody;
		m_rigidCollisionObject: btCollisionObject;
		m_isSwapped: boolean;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btSoftRigidDynamicsWorld {
		constructor(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration, softBodySolver?: btSoftBodySolver); m_softBodies: any;
		m_drawFlags: number;
		m_drawNodeTree: boolean;
		m_drawFaceTree: boolean;
		m_drawClusterTree: boolean;
		m_sbi: btSoftBodyWorldInfo;
		m_softBodySolver: btSoftBodySolver;
		m_ownsSolver: boolean;
		debugDrawWorld(): void;
		addSoftBody(body?: btSoftBody, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		removeSoftBody(body?: btSoftBody): void;
		removeCollisionObject(collisionObject?: btCollisionObject): void;
		getDrawFlags(): number;
		setDrawFlags(f?: number): void;
		getWorldInfo(): btSoftBodyWorldInfo;
		getWorldInfo(): btSoftBodyWorldInfo;
		getWorldType(): any;
		getSoftBodyArray(): any;
		getSoftBodyArray(): any;
		rayTest(rayFromWorld?: btVector3, rayToWorld?: btVector3, resultCallback?: any): void;
		serialize(serializer?: btSerializer): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btDiscreteDynamicsWorld(dispatcher?: btDispatcher, pairCache?: btBroadphaseInterface, constraintSolver?: btConstraintSolver, collisionConfiguration?: btCollisionConfiguration): any;
		btDiscreteDynamicsWorld(): any;
		stepSimulation(timeStep?: any, maxSubSteps?: number, fixedTimeStep?: any): number;
		synchronizeMotionStates(): void;
		synchronizeSingleMotionState(body?: btRigidBody): void;
		addConstraint(constraint?: btTypedConstraint, disableCollisionsBetweenLinkedBodies?: boolean): void;
		removeConstraint(constraint?: btTypedConstraint): void;
		addAction(arg1?: btActionInterface): void;
		removeAction(arg1?: btActionInterface): void;
		getSimulationIslandManager(): btSimulationIslandManager;
		getSimulationIslandManager(): btSimulationIslandManager;
		getCollisionWorld(): btCollisionWorld;
		setGravity(gravity?: btVector3): void;
		getGravity(): btVector3;
		addCollisionObject(collisionObject?: btCollisionObject, collisionFilterGroup?: number, collisionFilterMask?: number): void;
		addRigidBody(body?: btRigidBody): void;
		addRigidBody(body?: btRigidBody, group?: number, mask?: number): void;
		removeRigidBody(body?: btRigidBody): void;
		debugDrawConstraint(constraint?: btTypedConstraint): void;
		setConstraintSolver(solver?: btConstraintSolver): void;
		getConstraintSolver(): btConstraintSolver;
		getNumConstraints(): number;
		getConstraint(index?: number): btTypedConstraint;
		getConstraint(index?: number): btTypedConstraint;
		clearForces(): void;
		applyGravity(): void;
		setNumTasks(numTasks?: number): void;
		updateVehicles(timeStep?: any): void;
		addVehicle(vehicle?: btActionInterface): void;
		removeVehicle(vehicle?: btActionInterface): void;
		addCharacter(character?: btActionInterface): void;
		removeCharacter(character?: btActionInterface): void;
		setSynchronizeAllMotionStates(synchronizeAll?: boolean): void;
		getSynchronizeAllMotionStates(): boolean;
		setApplySpeculativeContactRestitution(enable?: boolean): void;
		getApplySpeculativeContactRestitution(): boolean;
		setLatencyMotionStateInterpolation(latencyInterpolation?: boolean): void;
		getLatencyMotionStateInterpolation(): boolean;
		btDynamicsWorld(dispatcher?: btDispatcher, broadphase?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btDynamicsWorld(): any;
		setInternalTickCallback(cb?: any, worldUserInfo?: void, isPreTick?: boolean): void;
		setWorldUserInfo(worldUserInfo?: void): void;
		getWorldUserInfo(): any;
		getSolverInfo(): btContactSolverInfo;
		btCollisionWorld(dispatcher?: btDispatcher, broadphasePairCache?: btBroadphaseInterface, collisionConfiguration?: btCollisionConfiguration): any;
		btCollisionWorld(): any;
		setBroadphase(pairCache?: btBroadphaseInterface): void;
		getBroadphase(): btBroadphaseInterface;
		getBroadphase(): btBroadphaseInterface;
		getPairCache(): btOverlappingPairCache;
		getDispatcher(): btDispatcher;
		getDispatcher(): btDispatcher;
		updateSingleAabb(colObj?: btCollisionObject): void;
		updateAabbs(): void;
		computeOverlappingPairs(): void;
		setDebugDrawer(debugDrawer?: btIDebugDraw): void;
		getDebugDrawer(): btIDebugDraw;
		debugDrawObject(worldTransform?: btTransform, shape?: btCollisionShape, color?: btVector3): void;
		getNumCollisionObjects(): number;
		convexSweepTest(castShape?: btConvexShape, from?: btTransform, to?: btTransform, resultCallback?: any, allowedCcdPenetration?: any): void;
		contactTest(colObj?: btCollisionObject, resultCallback?: any): void;
		contactPairTest(colObjA?: btCollisionObject, colObjB?: btCollisionObject, resultCallback?: any): void;
		getCollisionObjectArray(): any;
		getCollisionObjectArray(): any;
		performDiscreteCollisionDetection(): void;
		getDispatchInfo(): btDispatcherInfo;
		getDispatchInfo(): btDispatcherInfo;
		getForceUpdateAllAabbs(): boolean;
		setForceUpdateAllAabbs(forceUpdateAllAabbs?: boolean): void;
		predictUnconstraintMotion(timeStep?: any): void;
		internalSingleStepSimulation(timeStep?: any): void;
		solveSoftBodiesConstraints(timeStep?: any): void;
		serializeSoftBodies(serializer?: btSerializer): void;
		integrateTransforms(timeStep?: any): void;
		calculateSimulationIslands(): void;
		solveConstraints(solverInfo?: btContactSolverInfo): void;
		updateActivationState(timeStep?: any): void;
		updateActions(timeStep?: any): void;
		startProfiling(timeStep?: any): void;
		createPredictiveContacts(timeStep?: any): void;
		saveKinematicState(timeStep?: any): void;
		serializeRigidBodies(serializer?: btSerializer): void;
		serializeDynamicsWorldInfo(serializer?: btSerializer): void;
		serializeCollisionObjects(serializer?: btSerializer): void;
	}
	export class btSoftSingleRayCallback {
		constructor(rayFromWorld?: btVector3, rayToWorld?: btVector3, world?: btSoftRigidDynamicsWorld, resultCallback?: any); m_rayFromWorld: btVector3;
		m_rayToWorld: btVector3;
		m_rayFromTrans: btTransform;
		m_rayToTrans: btTransform;
		m_hitNormal: btVector3;
		m_world: btSoftRigidDynamicsWorld;
		m_resultCallback: any;
		m_rayDirectionInverse: btVector3;
		m_signs: number;
		m_lambda_max: any;
		process(proxy?: btBroadphaseProxy): boolean;
		btBroadphaseRayCallback(): any;
		btBroadphaseAabbCallback(): any;
	}
	export class btSoftSoftCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_softBody0: btSoftBody;
		m_softBody1: btSoftBody;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btSolve2LinearConstraint {
		constructor(tau?: any, damping?: any); m_tau: any;
		m_damping: any;
		resolveUnilateralPairConstraint(body0?: btRigidBody, body1?: btRigidBody, world2A?: btMatrix3x3, world2B?: btMatrix3x3, invInertiaADiag?: btVector3, invMassA?: any, linvelA?: btVector3, angvelA?: btVector3, rel_posA1?: btVector3, invInertiaBDiag?: btVector3, invMassB?: any, linvelB?: btVector3, angvelB?: btVector3, rel_posA2?: btVector3, depthA?: any, normalA?: btVector3, rel_posB1?: btVector3, rel_posB2?: btVector3, depthB?: any, normalB?: btVector3, imp0?: any, imp1?: any): void;
		resolveBilateralPairConstraint(body0?: btRigidBody, body1?: btRigidBody, world2A?: btMatrix3x3, world2B?: btMatrix3x3, invInertiaADiag?: btVector3, invMassA?: any, linvelA?: btVector3, angvelA?: btVector3, rel_posA1?: btVector3, invInertiaBDiag?: btVector3, invMassB?: any, linvelB?: btVector3, angvelB?: btVector3, rel_posA2?: btVector3, depthA?: any, normalA?: btVector3, rel_posB1?: btVector3, rel_posB2?: btVector3, depthB?: any, normalB?: btVector3, imp0?: any, imp1?: any): void;
	}
	export class btSolveProjectedGaussSeidel {
		constructor(); solveMLCP(A?: any, b?: any, x?: any, lo?: any, hi?: any, limitDependency?: any, numIterations?: number, useSparsity?: boolean): boolean;
		btMLCPSolverInterface(): any;
	}
	export class btSolverBody {
		constructor(); m_worldTransform: btTransform;
		m_deltaLinearVelocity: btVector3;
		m_deltaAngularVelocity: btVector3;
		m_angularFactor: btVector3;
		m_linearFactor: btVector3;
		m_invMass: btVector3;
		m_pushVelocity: btVector3;
		m_turnVelocity: btVector3;
		m_linearVelocity: btVector3;
		m_angularVelocity: btVector3;
		m_externalForceImpulse: btVector3;
		m_externalTorqueImpulse: btVector3;
		m_originalBody: btRigidBody;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		setWorldTransform(worldTransform?: btTransform): void;
		getWorldTransform(): btTransform;
		getVelocityInLocalPointNoDelta(rel_pos?: btVector3, velocity?: btVector3): void;
		getVelocityInLocalPointObsolete(rel_pos?: btVector3, velocity?: btVector3): void;
		getAngularVelocity(angVel?: btVector3): void;
		applyImpulse(linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any): void;
		internalApplyPushImpulse(linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any): void;
		getDeltaLinearVelocity(): btVector3;
		getDeltaAngularVelocity(): btVector3;
		getPushVelocity(): btVector3;
		getTurnVelocity(): btVector3;
		internalGetDeltaLinearVelocity(): btVector3;
		internalGetDeltaAngularVelocity(): btVector3;
		internalGetAngularFactor(): btVector3;
		internalGetInvMass(): btVector3;
		internalSetInvMass(invMass?: btVector3): void;
		internalGetPushVelocity(): btVector3;
		internalGetTurnVelocity(): btVector3;
		internalGetVelocityInLocalPointObsolete(rel_pos?: btVector3, velocity?: btVector3): void;
		internalGetAngularVelocity(angVel?: btVector3): void;
		internalApplyImpulse(linearComponent?: btVector3, angularComponent?: btVector3, impulseMagnitude?: any): void;
		writebackVelocity(): void;
		writebackVelocityAndTransform(timeStep?: any, splitImpulseTurnErp?: any): void;
	}
	export class btSolverConstraint {
		constructor(); m_relpos1CrossNormal: btVector3;
		m_contactNormal1: btVector3;
		m_relpos2CrossNormal: btVector3;
		m_contactNormal2: btVector3;
		m_angularComponentA: btVector3;
		m_angularComponentB: btVector3;
		m_appliedPushImpulse: any;
		m_appliedImpulse: any;
		m_friction: any;
		m_jacDiagABInv: any;
		m_rhs: any;
		m_cfm: any;
		m_lowerLimit: any;
		m_upperLimit: any;
		m_rhsPenetration: any;
		m_overrideNumSolverIterations: number;
		m_frictionIndex: number;
		m_solverBodyIdA: number;
		m_solverBodyIdB: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
	}
	export class btSortConstraintOnIslandPredicate { constructor(); }
	export class btSortConstraintOnIslandPredicate2 { constructor(); }
	export class btSortedOverlappingPairCache {
		constructor(); m_overlappingPairArray: any;
		m_blockedForChanges: boolean;
		m_hasDeferredRemoval: boolean;
		m_overlapFilterCallback: btOverlapFilterCallback;
		m_ghostPairCallback: btOverlappingPairCallback;
		processAllOverlappingPairs(arg1?: btOverlapCallback, dispatcher?: btDispatcher): void;
		removeOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy, dispatcher?: btDispatcher): any;
		cleanOverlappingPair(pair?: btBroadphasePair, dispatcher?: btDispatcher): void;
		addOverlappingPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		findPair(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): btBroadphasePair;
		cleanProxyFromPairs(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		removeOverlappingPairsContainingProxy(proxy?: btBroadphaseProxy, dispatcher?: btDispatcher): void;
		needsBroadphaseCollision(proxy0?: btBroadphaseProxy, proxy1?: btBroadphaseProxy): boolean;
		getOverlappingPairArray(): any;
		getOverlappingPairArray(): any;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getOverlappingPairArrayPtr(): btBroadphasePair;
		getNumOverlappingPairs(): number;
		getOverlapFilterCallback(): btOverlapFilterCallback;
		setOverlapFilterCallback(callback?: btOverlapFilterCallback): void;
		hasDeferredRemoval(): boolean;
		setInternalGhostPairCallback(ghostPairCallback?: btOverlappingPairCallback): void;
		sortOverlappingPairs(dispatcher?: btDispatcher): void;
		btOverlappingPairCache(): any;
		btOverlappingPairCallback(): any;
	}
	export class btSortMultiBodyConstraintOnIslandPredicate { constructor(); }
	export class btSparseSdf {
		constructor(); b: number;
		i: number;
		f: any;
	}
	export class btSpatialForceVector {
		constructor(ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any); m_topVec: btVector3;
		m_bottomVec: btVector3;
		setVector(angular?: btVector3, linear?: btVector3): void;
		setValue(ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any): void;
		addVector(angular?: btVector3, linear?: btVector3): void;
		addValue(ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any): void;
		getLinear(): btVector3;
		getAngular(): btVector3;
		setLinear(linear?: btVector3): void;
		setAngular(angular?: btVector3): void;
		addAngular(angular?: btVector3): void;
		addLinear(linear?: btVector3): void;
		setZero(): void;
	}
	export class btSpatialMotionVector {
		constructor(angular?: btVector3, linear?: btVector3); m_topVec: btVector3;
		m_bottomVec: btVector3;
		setVector(angular?: btVector3, linear?: btVector3): void;
		setValue(ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any): void;
		addVector(angular?: btVector3, linear?: btVector3): void;
		addValue(ax?: any, ay?: any, az?: any, lx?: any, ly?: any, lz?: any): void;
		getAngular(): btVector3;
		getLinear(): btVector3;
		setAngular(angular?: btVector3): void;
		setLinear(linear?: btVector3): void;
		addAngular(angular?: btVector3): void;
		addLinear(linear?: btVector3): void;
		setZero(): void;
		dot(b?: btSpatialForceVector): any;
	}
	export class btSpatialTransformationMatrix {
		constructor(); m_rotMat: btMatrix3x3;
		m_trnVec: btVector3;
		transformInverse(inMat?: btSymmetricSpatialDyad, outMat?: btSymmetricSpatialDyad, outOp?: any): void;
	}
	export class btSphereBoxCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, isSwapped?: boolean); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_isSwapped: boolean;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		getSphereDistance(boxObjWrap?: btCollisionObjectWrapper, v3PointOnBox?: btVector3, normal?: btVector3, penetrationDepth?: any, v3SphereCenter?: btVector3, fRadius?: any, maxContactDistance?: any): boolean;
		getSpherePenetration(boxHalfExtent?: any, sphereRelPos?: any, closestPoint?: btVector3, normal?: btVector3): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btSphereShape extends btCollisionShape {
		constructor(radius?: any); BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getRadius(): any;
		setUnscaledRadius(radius?: any): void;
		getName(): any;
		setMargin(margin?: any): void;
		getMargin(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btSphereSphereCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, col0Wrap?: btCollisionObjectWrapper, col1Wrap?: btCollisionObjectWrapper); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btSphereTriangleCollisionAlgorithm {
		constructor(mf?: btPersistentManifold, ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, swapped?: boolean); m_ownManifold: boolean;
		m_manifoldPtr: btPersistentManifold;
		m_swapped: boolean;
		processCollision(body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): void;
		calculateTimeOfImpact(body0?: btCollisionObject, body1?: btCollisionObject, dispatchInfo?: btDispatcherInfo, resultOut?: btManifoldResult): any;
		getAllContactManifolds(manifoldArray?: any): void;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btActivatingCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): any;
		btActivatingCollisionAlgorithm(): any;
		btCollisionAlgorithm(): any;
		btCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo): any;
		btCollisionAlgorithm(): any;
	}
	export class btStackAlloc {
		constructor(size?: number); data: any;
		totalsize: number;
		usedsize: number;
		current: btBlock;
		ischild: boolean;
		create(size?: number): void;
		destroy(): void;
		getAvailableMemory(): number;
		allocate(size?: number): any;
		beginBlock(): btBlock;
		endBlock(block?: btBlock): void;
		ctor(): void;
	}
	export class btStaticPlaneShape {
		constructor(planeNormal?: btVector3, planeConstant?: any); m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_planeNormal: btVector3;
		m_planeConstant: any;
		m_localScaling: btVector3;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getPlaneNormal(): btVector3;
		getPlaneConstant(): any;
		getName(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btStaticPlaneShapeData {
		constructor(); m_collisionShapeData: btCollisionShapeData;
		m_localScaling: btVector3FloatData;
		m_planeNormal: btVector3FloatData;
		m_planeConstant: number;
		m_pad: string;
	}
	export class btStorageResult {
		constructor(); m_normalOnSurfaceB: btVector3;
		m_closestPointInB: btVector3;
		m_distance: any;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any): void;
		Result(): any;
		setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
	}
	export class btStridingMeshInterface {
		constructor(); m_scaling: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		InternalProcessAllTriangles(callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateAabbBruteForce(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLockedVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, stride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		getLockedReadOnlyVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, stride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		unLockVertexBase(subpart?: number): void;
		unLockReadOnlyVertexBase(subpart?: number): void;
		getNumSubParts(): number;
		preallocateVertices(numverts?: number): void;
		preallocateIndices(numindices?: number): void;
		hasPremadeAabb(): boolean;
		setPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getScaling(): btVector3;
		setScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
	}
	export class btStridingMeshInterfaceData {
		constructor(); m_meshPartsPtr: btMeshPartData;
		m_scaling: btVector3FloatData;
		m_numMeshParts: number;
		m_padding: string;
	}
	export class btSubSimplexClosestResult {
		constructor(); m_closestPointOnSimplex: btVector3;
		m_usedVertices: btUsageBitfield;
		m_barycentricCoords: any;
		m_degenerate: boolean;
		reset(): void;
		isValid(): boolean;
		setBarycentricCoordinates(a?: any): void;
	}
	export class btSubsimplexConvexCast {
		constructor(shapeA?: btConvexShape, shapeB?: btConvexShape, simplexSolver?: any);
		m_simplexSolver: any;
		m_convexA: btConvexShape;
		m_convexB: btConvexShape;
		calcTimeOfImpact(fromA?: btTransform, toA?: btTransform, fromB?: btTransform, toB?: btTransform, result?: any): boolean;
		btConvexCast(): any;
	}
	export class btSymMatrix {
		constructor(n?: number, init?: any); store: any;
		dim: number;
		resize(n?: number, init?: any): void;
		index(c?: number, r?: number): number;
	}
	export class btSymmetricSpatialDyad {
		constructor(topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3);
		m_topLeftMat: btMatrix3x3;
		m_topRightMat: btMatrix3x3;
		m_bottomLeftMat: btMatrix3x3;
		setMatrix(topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3): void;
		addMatrix(topLeftMat?: btMatrix3x3, topRightMat?: btMatrix3x3, bottomLeftMat?: btMatrix3x3): void;
		setIdentity(): void;
	}
	export class btTetrahedronShapeEx {
		constructor();
		setVertices(v0?: btVector3, v1?: btVector3, v2?: btVector3, v3?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btBU_Simplex1to4(): any;
		btBU_Simplex1to4(pt0?: btVector3): any;
		btBU_Simplex1to4(pt0?: btVector3, pt1?: btVector3): any;
		btBU_Simplex1to4(pt0?: btVector3, pt1?: btVector3, pt2?: btVector3): any;
		btBU_Simplex1to4(pt0?: btVector3, pt1?: btVector3, pt2?: btVector3, pt3?: btVector3): any;
		reset(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		addVertex(pt?: btVector3): void;
		getNumVertices(): number;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getVertex(i?: number, vtx?: btVector3): void;
		getNumPlanes(): number;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getIndex(i?: number): number;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		btPolyhedralConvexAabbCachingShape(): any;
		getNonvirtualAabb(trans?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3, margin?: any): void;
		setLocalScaling(scaling?: btVector3): void;
		recalcLocalAabb(): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}

	export class btTransform {
		constructor(b?: btMatrix3x3, c?: btVector3);
		m_basis: btMatrix3x3;
		m_origin: btVector3;
		mult(t1?: btTransform, t2?: btTransform): void;
		getBasis(): btMatrix3x3;
		getBasis(): btMatrix3x3;
		getOrigin(): btVector3;
		getOrigin(): btVector3;
		getRotation(): btQuaternion;
		setFromOpenGLMatrix(m?: any): void;
		getOpenGLMatrix(m?: any): void;
		setOrigin(origin?: btVector3): void;
		invXform(inVec?: btVector3): btVector3;
		setBasis(basis?: btMatrix3x3): void;
		setRotation(q?: btQuaternion): void;
		setIdentity(): void;
		inverse(): btTransform;
		inverseTimes(t?: btTransform): btTransform;
		serialize(dataOut?: any): void;
		serializeFloat(dataOut?: btTransformFloatData): void;
		deSerialize(dataIn?: any): void;
		deSerializeDouble(dataIn?: btTransformDoubleData): void;
		deSerializeFloat(dataIn?: btTransformFloatData): void;
	}

	export class btTransformDoubleData {
		constructor(); m_basis: btMatrix3x3DoubleData;
		m_origin: btVector3DoubleData;
	}
	export class btTransformFloatData {
		constructor(); m_basis: btMatrix3x3FloatData;
		m_origin: btVector3FloatData;
	}

	export class btTransformUtil { constructor(); }
	export class btTranslationalLimitMotor {
		constructor(other?: btTranslationalLimitMotor); m_lowerLimit: btVector3;
		m_upperLimit: btVector3;
		m_accumulatedImpulse: btVector3;
		m_enableMotor: boolean;
		m_targetVelocity: btVector3;
		m_maxMotorForce: btVector3;
		m_currentLimitError: btVector3;
		m_currentLinearDiff: btVector3;
		m_currentLimit: number;
		m_limitSoftness: any;
		m_damping: any;
		m_restitution: any;
		m_normalCFM: btVector3;
		m_stopERP: btVector3;
		m_stopCFM: btVector3;
		isLimited(limitIndex?: number): boolean;
		needApplyForce(limitIndex?: number): boolean;
		testLimitValue(limitIndex?: number, test_value?: any): number;
		solveLinearAxis(timeStep?: any, jacDiagABInv?: any, body1?: btRigidBody, pointInA?: btVector3, body2?: btRigidBody, pointInB?: btVector3, limit_index?: number, axis_normal_on_a?: btVector3, anchorPos?: btVector3): any;
	}
	export class btTranslationalLimitMotor2 {
		constructor(other?: btTranslationalLimitMotor2); m_lowerLimit: btVector3;
		m_upperLimit: btVector3;
		m_bounce: btVector3;
		m_stopERP: btVector3;
		m_stopCFM: btVector3;
		m_motorERP: btVector3;
		m_motorCFM: btVector3;
		m_enableMotor: boolean;
		m_servoMotor: boolean;
		m_enableSpring: boolean;
		m_servoTarget: btVector3;
		m_springStiffness: btVector3;
		m_springStiffnessLimited: boolean;
		m_springDamping: btVector3;
		m_springDampingLimited: boolean;
		m_equilibriumPoint: btVector3;
		m_targetVelocity: btVector3;
		m_maxMotorForce: btVector3;
		m_currentLimitError: btVector3;
		m_currentLimitErrorHi: btVector3;
		m_currentLinearDiff: btVector3;
		m_currentLimit: number;
		isLimited(limitIndex?: number): boolean;
		testLimitValue(limitIndex?: number, test_value?: any): void;
	}
	export class btTriangle {
		constructor(); m_vertex0: btVector3;
		m_vertex1: btVector3;
		m_vertex2: btVector3;
		m_partId: number;
		m_triangleIndex: number;
	}
	export class btTriangleBuffer {
		constructor(); m_triangleBuffer: any;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		getNumTriangles(): number;
		getTriangle(index?: number): btTriangle;
		clearBuffer(): void;
		btTriangleCallback(): any;
	}
	export class btTriangleCallback {
		constructor(); processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
	}
	export class btTriangleConvexcastCallback {
		constructor(convexShape?: btConvexShape, convexShapeFrom?: btTransform, convexShapeTo?: btTransform, triangleToWorld?: btTransform, triangleCollisionMargin?: any); m_convexShape: btConvexShape;
		m_convexShapeFrom: btTransform;
		m_convexShapeTo: btTransform;
		m_triangleToWorld: btTransform;
		m_hitFraction: any;
		m_triangleCollisionMargin: any;
		m_allowedPenetration: any;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		reportHit(hitNormalLocal?: btVector3, hitPointLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number): any;
		btTriangleCallback(): any;
	}
	export class btTriangleIndexVertexArray {
		constructor(numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number); m_indexedMeshes: any;
		m_pad: number;
		m_hasAabb: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		m_scaling: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		addIndexedMesh(mesh?: btIndexedMesh, indexType?: any): void;
		getLockedVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		getLockedReadOnlyVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		unLockVertexBase(subpart?: number): void;
		unLockReadOnlyVertexBase(subpart?: number): void;
		getNumSubParts(): number;
		getIndexedMeshArray(): any;
		getIndexedMeshArray(): any;
		preallocateVertices(numverts?: number): void;
		preallocateIndices(numindices?: number): void;
		hasPremadeAabb(): boolean;
		setPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btStridingMeshInterface(): any;
		btStridingMeshInterface(): any;
		InternalProcessAllTriangles(callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateAabbBruteForce(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getScaling(): btVector3;
		setScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
	}
	export class btTriangleIndexVertexMaterialArray {
		constructor(numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number, numMaterials?: number, materialBase?: string, materialStride?: number, triangleMaterialsBase?: number, materialIndexStride?: number); m_materials: any;
		m_indexedMeshes: any;
		m_pad: number;
		m_hasAabb: number;
		m_aabbMin: btVector3;
		m_aabbMax: btVector3;
		m_scaling: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		addMaterialProperties(mat?: btMaterialProperties, triangleType?: any): void;
		getLockedMaterialBase(materialBase?: string, numMaterials?: number, materialType?: any, materialStride?: number, triangleMaterialBase?: string, numTriangles?: number, triangleMaterialStride?: number, triangleType?: any, subpart?: number): void;
		getLockedReadOnlyMaterialBase(materialBase?: string, numMaterials?: number, materialType?: any, materialStride?: number, triangleMaterialBase?: string, numTriangles?: number, triangleMaterialStride?: number, triangleType?: any, subpart?: number): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTriangleIndexVertexArray(): any;
		btTriangleIndexVertexArray(): any;
		btTriangleIndexVertexArray(numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number): any;
		addIndexedMesh(mesh?: btIndexedMesh, indexType?: any): void;
		getLockedVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		getLockedReadOnlyVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		unLockVertexBase(subpart?: number): void;
		unLockReadOnlyVertexBase(subpart?: number): void;
		getNumSubParts(): number;
		getIndexedMeshArray(): any;
		getIndexedMeshArray(): any;
		preallocateVertices(numverts?: number): void;
		preallocateIndices(numindices?: number): void;
		hasPremadeAabb(): boolean;
		setPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btStridingMeshInterface(): any;
		btStridingMeshInterface(): any;
		InternalProcessAllTriangles(callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateAabbBruteForce(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getScaling(): btVector3;
		setScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
	}
	export class btTriangleInfo {
		constructor(); m_flags: number;
		m_edgeV0V1Angle: any;
		m_edgeV1V2Angle: any;
		m_edgeV2V0Angle: any;
	}
	export class btTriangleInfoData {
		constructor(); m_flags: number;
		m_edgeV0V1Angle: number;
		m_edgeV1V2Angle: number;
		m_edgeV2V0Angle: number;
	}
	export class btTriangleInfoMap {
		constructor(); m_convexEpsilon: any;
		m_planarEpsilon: any;
		m_equalVertexThreshold: any;
		m_edgeDistanceThreshold: any;
		m_maxEdgeAngleThreshold: any;
		m_zeroAreaThreshold: any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		deSerialize(data?: btTriangleInfoMapData): void;
		insert(key?: any, value?: any): void;
		remove(key?: any): void;
		size(): number;
		getAtIndex(index?: number): any;
		getAtIndex(index?: number): any;
		find(key?: any): any;
		find(key?: any): any;
		findIndex(key?: any): number;
		clear(): void;
	}
	export class btTriangleInfoMapData {
		constructor(); m_hashTablePtr: any;
		m_nextPtr: any;
		m_valueArrayPtr: btTriangleInfoData;
		m_keyArrayPtr: any;
		m_convexEpsilon: number;
		m_planarEpsilon: number;
		m_equalVertexThreshold: number;
		m_edgeDistanceThreshold: number;
		m_zeroAreaThreshold: number;
		m_nextSize: number;
		m_hashTableSize: number;
		m_numValues: number;
		m_numKeys: number;
		m_padding: string;
	}
	export class btTriangleMesh {
		constructor(use32bitIndices?: boolean, use4componentVertices?: boolean); m_weldingThreshold: any;
		m_4componentVertices: any;
		m_3componentVertices: any;
		m_32bitIndices: any;
		m_16bitIndices: any;
		m_use32bitIndices: boolean;
		m_use4componentVertices: boolean;
		getUse32bitIndices(): boolean;
		getUse4componentVertices(): boolean;
		addTriangle(vertex0?: btVector3, vertex1?: btVector3, vertex2?: btVector3, removeDuplicateVertices?: boolean): void;
		addTriangleIndices(index1?: number, index2?: number, index3?: number): void;
		getNumTriangles(): number;
		preallocateVertices(numverts?: number): void;
		preallocateIndices(numindices?: number): void;
		findOrAddVertex(vertex?: btVector3, removeDuplicateVertices?: boolean): number;
		addIndex(index?: number): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTriangleIndexVertexArray(): any;
		btTriangleIndexVertexArray(): any;
		btTriangleIndexVertexArray(numTriangles?: number, triangleIndexBase?: number, triangleIndexStride?: number, numVertices?: number, vertexBase?: any, vertexStride?: number): any;
		addIndexedMesh(mesh?: btIndexedMesh, indexType?: any): void;
		getLockedVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		getLockedReadOnlyVertexIndexBase(vertexbase?: string, numverts?: number, type?: any, vertexStride?: number, indexbase?: string, indexstride?: number, numfaces?: number, indicestype?: any, subpart?: number): void;
		unLockVertexBase(subpart?: number): void;
		unLockReadOnlyVertexBase(subpart?: number): void;
		getNumSubParts(): number;
		getIndexedMeshArray(): any;
		getIndexedMeshArray(): any;
		hasPremadeAabb(): boolean;
		setPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getPremadeAabb(aabbMin?: btVector3, aabbMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btStridingMeshInterface(): any;
		btStridingMeshInterface(): any;
		InternalProcessAllTriangles(callback?: btInternalTriangleIndexCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateAabbBruteForce(aabbMin?: btVector3, aabbMax?: btVector3): void;
		getScaling(): btVector3;
		setScaling(scaling?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
	}
	export class btTriangleMeshShape {
		constructor(meshInterface?: btStridingMeshInterface); m_localAabbMin: btVector3;
		m_localAabbMax: btVector3;
		m_meshInterface: btStridingMeshInterface;
		m_collisionMargin: any;
		m_shapeType: number;
		m_userPointer: any;
		m_userIndex: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		recalcLocalAabb(): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		processAllTriangles(callback?: btTriangleCallback, aabbMin?: btVector3, aabbMax?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getMeshInterface(): btStridingMeshInterface;
		getMeshInterface(): btStridingMeshInterface;
		getLocalAabbMin(): btVector3;
		getLocalAabbMax(): btVector3;
		getName(): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConcaveShape(): any;
		btConcaveShape(): any;
		getMargin(): any;
		setMargin(collisionMargin?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btTriangleMeshShapeData {
		constructor(); m_collisionShapeData: btCollisionShapeData;
		m_meshInterface: btStridingMeshInterfaceData;
		m_quantizedFloatBvh: btQuantizedBvhFloatData;
		m_quantizedDoubleBvh: btQuantizedBvhDoubleData;
		m_triangleInfoMap: btTriangleInfoMapData;
		m_collisionMargin: number;
		m_pad3: string;
	}
	export class btTriangleRaycastCallback {
		constructor(from?: btVector3, to?: btVector3, flags?: number); m_from: btVector3;
		m_to: btVector3;
		m_flags: number;
		m_hitFraction: any;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		reportHit(hitNormalLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number): any;
		btTriangleCallback(): any;
	}
	export class btTriangleShape {
		constructor(p0?: btVector3, p1?: btVector3, p2?: btVector3); m_vertices1: btVector3;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getNumVertices(): number;
		getVertexPtr(index?: number): btVector3;
		getVertexPtr(index?: number): btVector3;
		getVertex(index?: number, vert?: btVector3): void;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		localGetSupportingVertexWithoutMargin(dir?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getNumPlanes(): number;
		calcNormal(normal?: btVector3): void;
		getPlaneEquation(i?: number, planeNormal?: btVector3, planeSupport?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btTriangleShapeEx {
		constructor(p0?: btVector3, p1?: btVector3, p2?: btVector3); getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		applyTransform(t?: btTransform): void;
		buildTriPlane(plane?: btVector4): void;
		overlap_test_conservative(other?: btTriangleShapeEx): boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getNumVertices(): number;
		getVertexPtr(index?: number): btVector3;
		getVertexPtr(index?: number): btVector3;
		getVertex(index?: number, vert?: btVector3): void;
		getNumEdges(): number;
		getEdge(i?: number, pa?: btVector3, pb?: btVector3): void;
		localGetSupportingVertexWithoutMargin(dir?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		btTriangleShape(): any;
		btTriangleShape(p0?: btVector3, p1?: btVector3, p2?: btVector3): any;
		getPlane(planeNormal?: btVector3, planeSupport?: btVector3, i?: number): void;
		getNumPlanes(): number;
		calcNormal(normal?: btVector3): void;
		getPlaneEquation(i?: number, planeNormal?: btVector3, planeSupport?: btVector3): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		isInside(pt?: btVector3, tolerance?: any): boolean;
		getName(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btPolyhedralConvexShape(): any;
		btPolyhedralConvexShape(): any;
		initializePolyhedralFeatures(shiftVerticesByMargin?: number): boolean;
		getConvexPolyhedron(): btConvexPolyhedron;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexInternalShape(): any;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		getImplicitShapeDimensions(): btVector3;
		setImplicitShapeDimensions(dimensions?: btVector3): void;
		setSafeMargin(minDimension?: any, defaultMarginMultiplier?: any): void;
		setSafeMargin(halfExtents?: btVector3, defaultMarginMultiplier?: any): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		getLocalScalingNV(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getMarginNV(): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btTriIndex {
		constructor(partId?: number, triangleIndex?: number, shape?: btCollisionShape); m_PartIdTriangleIndex: number;
		m_childShape: btCollisionShape;
		getTriangleIndex(): number;
		getPartId(): number;
		getUid(): number;
	}
	export class btTypedConstraint {
		constructor(type?: any, rbA?: btRigidBody, rbB?: btRigidBody); m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		m_userConstraintType: number;
		m_breakingImpulseThreshold: any;
		m_isEnabled: boolean;
		m_needsFeedback: boolean;
		m_overrideNumSolverIterations: number;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		buildJacobian(): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
		getMotorFactor(pos?: any, lowLim?: any, uppLim?: any, vel?: any, timeFact?: any): any;
	}
	export class btTypedConstraintData {
		constructor(); m_rbA: any;
		m_rbB: any;
		m_name: any;
		m_objectType: number;
		m_userConstraintType: number;
		m_userConstraintId: number;
		m_needsFeedback: number;
		m_appliedImpulse: number;
		m_dbgDrawSize: number;
		m_disableCollisionsBetweenLinkedBodies: number;
		m_overrideNumSolverIterations: number;
		m_breakingImpulseThreshold: number;
		m_isEnabled: number;
	}
	export class btTypedConstraintDoubleData {
		constructor(); m_rbA: btRigidBodyDoubleData;
		m_rbB: btRigidBodyDoubleData;
		m_name: any;
		m_objectType: number;
		m_userConstraintType: number;
		m_userConstraintId: number;
		m_needsFeedback: number;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_disableCollisionsBetweenLinkedBodies: number;
		m_overrideNumSolverIterations: number;
		m_breakingImpulseThreshold: any;
		m_isEnabled: number;
		padding: string;
	}
	export class btTypedConstraintFloatData {
		constructor(); m_rbA: btRigidBodyFloatData;
		m_rbB: btRigidBodyFloatData;
		m_name: any;
		m_objectType: number;
		m_userConstraintType: number;
		m_userConstraintId: number;
		m_needsFeedback: number;
		m_appliedImpulse: number;
		m_dbgDrawSize: number;
		m_disableCollisionsBetweenLinkedBodies: number;
		m_overrideNumSolverIterations: number;
		m_breakingImpulseThreshold: number;
		m_isEnabled: number;
	}
	export class btTypedObject {
		constructor(objectType?: number); m_objectType: number;
		getObjectType(): number;
	}
	export class btUniformScalingShape {
		constructor(convexChildShape?: btConvexShape, uniformScalingFactor?: any); m_childConvexShape: btConvexShape;
		m_uniformScalingFactor: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		localGetSupportingVertexWithoutMargin(vec?: btVector3): btVector3;
		localGetSupportingVertex(vec?: btVector3): btVector3;
		batchedUnitVectorGetSupportingVertexWithoutMargin(vectors?: btVector3, supportVerticesOut?: btVector3, numVectors?: number): void;
		calculateLocalInertia(mass?: any, inertia?: btVector3): void;
		getUniformScalingFactor(): any;
		getChildShape(): btConvexShape;
		getChildShape(): btConvexShape;
		getName(): any;
		getAabb(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		getAabbSlow(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		setLocalScaling(scaling?: btVector3): void;
		getLocalScaling(): btVector3;
		setMargin(margin?: any): void;
		getMargin(): any;
		getNumPreferredPenetrationDirections(): number;
		getPreferredPenetrationDirection(index?: number, penetrationVector?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btConvexShape(): any;
		btConvexShape(): any;
		localGetSupportVertexWithoutMarginNonVirtual(vec?: btVector3): btVector3;
		localGetSupportVertexNonVirtual(vec?: btVector3): btVector3;
		getMarginNonVirtual(): any;
		getAabbNonVirtual(t?: btTransform, aabbMin?: btVector3, aabbMax?: btVector3): void;
		project(trans?: btTransform, dir?: btVector3, minProj?: any, maxProj?: any, witnesPtMin?: btVector3, witnesPtMax?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btCollisionShape(): any;
		btCollisionShape(): any;
		getBoundingSphere(center?: btVector3, radius?: any): void;
		getAngularMotionDisc(): any;
		getContactBreakingThreshold(defaultContactThresholdFactor?: any): any;
		calculateTemporalAabb(curTrans?: btTransform, linvel?: btVector3, angvel?: btVector3, timeStep?: any, temporalAabbMin?: btVector3, temporalAabbMax?: btVector3): void;
		isPolyhedral(): boolean;
		isConvex2d(): boolean;
		isConvex(): boolean;
		isNonMoving(): boolean;
		isConcave(): boolean;
		isCompound(): boolean;
		isSoftBody(): boolean;
		isInfinite(): boolean;
		getShapeType(): number;
		getAnisotropicRollingFrictionDirection(): btVector3;
		setUserPointer(userPtr?: void): void;
		getUserPointer(): any;
		setUserIndex(index?: number): void;
		getUserIndex(): number;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		serializeSingleShape(serializer?: btSerializer): void;
	}
	export class btUnionFind {
		constructor(); m_elements: any;
		sortIslands(): void;
		reset(N?: number): void;
		getNumElements(): number;
		isRoot(x?: number): boolean;
		getElement(index?: number): btElement;
		getElement(index?: number): btElement;
		allocate(N?: number): void;
		Free(): void;
		find(p?: number, q?: number): number;
		unite(p?: number, q?: number): void;
		find(x?: number): number;
	}
	export class btUnionFindElementSortPredicate { constructor(); }
	export class btUniversalConstraint {
		constructor(rbA?: btRigidBody, rbB?: btRigidBody, anchor?: btVector3, axis1?: btVector3, axis2?: btVector3); m_anchor: btVector3;
		m_axis1: btVector3;
		m_axis2: btVector3;
		m_frameInA: btTransform;
		m_frameInB: btTransform;
		m_jacLinear: btJacobianEntry;
		m_jacAng: btJacobianEntry;
		m_linearLimits: btTranslationalLimitMotor;
		m_angularLimits: btRotationalLimitMotor;
		m_timeStep: any;
		m_calculatedTransformA: btTransform;
		m_calculatedTransformB: btTransform;
		m_calculatedAxisAngleDiff: btVector3;
		m_calculatedAxis: btVector3;
		m_calculatedLinearDiff: btVector3;
		m_factA: any;
		m_factB: any;
		m_hasStaticBody: boolean;
		m_AnchorPos: btVector3;
		m_useLinearReferenceFrameA: boolean;
		m_useOffsetForConstraintFrame: boolean;
		m_flags: number;
		m_rbA: btRigidBody;
		m_rbB: btRigidBody;
		m_appliedImpulse: any;
		m_dbgDrawSize: any;
		m_jointFeedback: btJointFeedback;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		getAnchor(): btVector3;
		getAnchor2(): btVector3;
		getAxis1(): btVector3;
		getAxis2(): btVector3;
		getAngle1(): any;
		getAngle2(): any;
		setUpperLimit(ang1max?: any, ang2max?: any): void;
		setLowerLimit(ang1min?: any, ang2min?: any): void;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btGeneric6DofConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): any;
		btGeneric6DofConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameB?: boolean): any;
		calculateTransforms(transA?: btTransform, transB?: btTransform): void;
		calculateTransforms(): void;
		getCalculatedTransformA(): btTransform;
		getCalculatedTransformB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		getFrameOffsetA(): btTransform;
		getFrameOffsetB(): btTransform;
		buildJacobian(): void;
		getInfo1(info?: btConstraintInfo1): void;
		getInfo1NonVirtual(info?: btConstraintInfo1): void;
		getInfo2(info?: btConstraintInfo2): void;
		getInfo2NonVirtual(info?: btConstraintInfo2, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3): void;
		updateRHS(timeStep?: any): void;
		getAxis(axis_index?: number): btVector3;
		getAngle(axis_index?: number): any;
		getRelativePivotPosition(axis_index?: number): any;
		setFrames(frameA?: btTransform, frameB?: btTransform): void;
		testAngularLimitMotor(axis_index?: number): boolean;
		setLinearLowerLimit(linearLower?: btVector3): void;
		getLinearLowerLimit(linearLower?: btVector3): void;
		setLinearUpperLimit(linearUpper?: btVector3): void;
		getLinearUpperLimit(linearUpper?: btVector3): void;
		setAngularLowerLimit(angularLower?: btVector3): void;
		getAngularLowerLimit(angularLower?: btVector3): void;
		setAngularUpperLimit(angularUpper?: btVector3): void;
		getAngularUpperLimit(angularUpper?: btVector3): void;
		getRotationalLimitMotor(index?: number): btRotationalLimitMotor;
		getTranslationalLimitMotor(): btTranslationalLimitMotor;
		setLimit(axis?: number, lo?: any, hi?: any): void;
		isLimited(limitIndex?: number): boolean;
		calcAnchorPos(arg1?: any): void;
		get_limit_motor_info2(limot?: btRotationalLimitMotor, transA?: btTransform, transB?: btTransform, linVelA?: btVector3, linVelB?: btVector3, angVelA?: btVector3, angVelB?: btVector3, info?: btConstraintInfo2, row?: number, ax1?: btVector3, rotational?: number, rotAllowed?: number): number;
		getUseFrameOffset(): boolean;
		setUseFrameOffset(frameOffsetOnOff?: boolean): void;
		setParam(num?: number, value?: any, axis?: number): void;
		getParam(num?: number, axis?: number): any;
		setAxis(axis1?: btVector3, axis2?: btVector3): void;
		calculateSerializeBufferSize(): number;
		serialize(dataBuffer?: void, serializer?: btSerializer): any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btTypedConstraint(): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody): any;
		btTypedConstraint(type?: any, rbA?: btRigidBody, rbB?: btRigidBody): any;
		getOverrideNumSolverIterations(): number;
		setOverrideNumSolverIterations(overideNumIterations?: number): void;
		setupSolverConstraint(ca?: any, solverBodyA?: number, solverBodyB?: number, timeStep?: any): void;
		internalSetAppliedImpulse(appliedImpulse?: any): void;
		internalGetAppliedImpulse(): any;
		getBreakingImpulseThreshold(): any;
		setBreakingImpulseThreshold(threshold?: any): void;
		isEnabled(): boolean;
		setEnabled(enabled?: boolean): void;
		solveConstraintObsolete(arg1?: btSolverBody, arg2?: btSolverBody, btScalar?: any): void;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getRigidBodyA(): btRigidBody;
		getRigidBodyB(): btRigidBody;
		getUserConstraintType(): number;
		setUserConstraintType(userConstraintType?: number): void;
		setUserConstraintId(uid?: number): void;
		getUserConstraintId(): number;
		setUserConstraintPtr(ptr?: void): void;
		getUserConstraintPtr(): any;
		setJointFeedback(jointFeedback?: btJointFeedback): void;
		getJointFeedback(): btJointFeedback;
		getJointFeedback(): btJointFeedback;
		getUid(): number;
		needsFeedback(): boolean;
		enableFeedback(needsFeedback?: boolean): void;
		getAppliedImpulse(): any;
		getConstraintType(): any;
		setDbgDrawSize(dbgDrawSize?: any): void;
		getDbgDrawSize(): any;
		btTypedObject(objectType?: number): any;
		getObjectType(): number;
	}
	export class btUsageBitfield {
		constructor();
		usedVertexA: number;
		usedVertexB: number;
		usedVertexC: number;
		usedVertexD: number;
		unused1: number;
		unused2: number;
		unused3: number;
		unused4: number;
		reset(): void;
	}
	export class btVector3 {
		constructor(_x?: any, _y?: any, _z?: any); m_floats: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		op_add(v?: btVector3): btVector3;
		op_sub(v?: btVector3): btVector3;
		dot(v?: btVector3): any;
		length2(): any;
		length(): any;
		norm(): any;
		distance2(v?: btVector3): any;
		distance(v?: btVector3): any;
		safeNormalize(): btVector3;
		normalize(): btVector3;
		normalized(): btVector3;
		rotate(wAxis?: btVector3, angle?: any): btVector3;
		angle(v?: btVector3): any;
		absolute(): btVector3;
		cross(v?: btVector3): btVector3;
		triple(v1?: btVector3, v2?: btVector3): any;
		minAxis(): number;
		maxAxis(): number;
		furthestAxis(): number;
		closestAxis(): number;
		setInterpolate3(v0?: btVector3, v1?: btVector3, rt?: any): void;
		lerp(v?: btVector3, t?: any): btVector3;
		op_mul(v?: btVector3): btVector3;
		getX(): any;
		getY(): any;
		getZ(): any;
		setX(_x?: any): void;
		setY(_y?: any): void;
		setZ(_z?: any): void;
		setW(_w?: any): void;
		x(): any;
		y(): any;
		z(): any;
		w(): any;
		operator(): any;
		operator(): any;
		setMax(other?: btVector3): void;
		setMin(other?: btVector3): void;
		setValue(_x?: any, _y?: any, _z?: any): void;
		getSkewSymmetricMatrix(v0?: btVector3, v1?: btVector3, v2?: btVector3): void;
		setZero(): void;
		isZero(): boolean;
		fuzzyZero(): boolean;
		serialize(dataOut?: any): void;
		deSerialize(dataIn?: any): void;
		serializeFloat(dataOut?: btVector3FloatData): void;
		deSerializeFloat(dataIn?: btVector3FloatData): void;
		serializeDouble(dataOut?: btVector3DoubleData): void;
		deSerializeDouble(dataIn?: btVector3DoubleData): void;
		maxDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		minDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		dot3(v0?: btVector3, v1?: btVector3, v2?: btVector3): btVector3;
	} export class btVector3DoubleData {
		constructor(); m_floats: any;
	}
	export class btVector3FloatData {
		constructor(); m_floats: number;
	}
	export class btVector4 {
		constructor(_x?: any, _y?: any, _z?: any, _w?: any); absolute4(): btVector4;
		getW(): any;
		maxAxis4(): number;
		minAxis4(): number;
		closestAxis4(): number;
		setValue(_x?: any, _y?: any, _z?: any, _w?: any): void;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btVector3(): any;
		btVector3(_x?: any, _y?: any, _z?: any): any;
		op_add(v?: btVector3): btVector3;
		op_sub(v?: btVector3): btVector3;
		dot(v?: btVector3): any;
		length2(): any;
		length(): any;
		norm(): any;
		distance2(v?: btVector3): any;
		distance(v?: btVector3): any;
		safeNormalize(): btVector3;
		normalize(): btVector3;
		normalized(): btVector3;
		rotate(wAxis?: btVector3, angle?: any): btVector3;
		angle(v?: btVector3): any;
		absolute(): btVector3;
		cross(v?: btVector3): btVector3;
		triple(v1?: btVector3, v2?: btVector3): any;
		minAxis(): number;
		maxAxis(): number;
		furthestAxis(): number;
		closestAxis(): number;
		setInterpolate3(v0?: btVector3, v1?: btVector3, rt?: any): void;
		lerp(v?: btVector3, t?: any): btVector3;
		op_mul(v?: btVector3): btVector3;
		getX(): any;
		getY(): any;
		getZ(): any;
		setX(_x?: any): void;
		setY(_y?: any): void;
		setZ(_z?: any): void;
		setW(_w?: any): void;
		x(): any;
		y(): any;
		z(): any;
		w(): any;
		operator(): any;
		operator(): any;
		setMax(other?: btVector3): void;
		setMin(other?: btVector3): void;
		setValue(_x?: any, _y?: any, _z?: any): void;
		getSkewSymmetricMatrix(v0?: btVector3, v1?: btVector3, v2?: btVector3): void;
		setZero(): void;
		isZero(): boolean;
		fuzzyZero(): boolean;
		serialize(dataOut?: any): void;
		deSerialize(dataIn?: any): void;
		serializeFloat(dataOut?: btVector3FloatData): void;
		deSerializeFloat(dataIn?: btVector3FloatData): void;
		serializeDouble(dataOut?: btVector3DoubleData): void;
		deSerializeDouble(dataIn?: btVector3DoubleData): void;
		maxDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		minDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		dot3(v0?: btVector3, v1?: btVector3, v2?: btVector3): btVector3;
	}
	export class btVectorX {
		constructor(numRows?: number); m_storage: any;
		resize(rows?: number): void;
		cols(): number;
		rows(): number;
		size(): number;
		nrm2(): any;
		setZero(): void;
		getBufferPointerWritable(): any;
		getBufferPointer(): any;
	}
	export class btVehicleRaycaster {
		constructor(); castRay(from?: btVector3, to?: btVector3, result?: btVehicleRaycasterResult): any;
	}
	export class btVehicleRaycasterResult {
		constructor(); m_hitPointInWorld: btVector3;
		m_hitNormalInWorld: btVector3;
		m_distFraction: any;
	}
	export class btVehicleTuning {
		constructor(); m_suspensionStiffness: any;
		m_suspensionCompression: any;
		m_suspensionDamping: any;
		m_maxSuspensionTravelCm: any;
		m_frictionSlip: any;
		m_maxSuspensionForce: any;
	}
	export class btVertexBufferDescriptor {
		constructor(); m_hasVertexPositions: boolean;
		m_hasNormals: boolean;
		m_vertexOffset: number;
		m_vertexStride: number;
		m_normalOffset: number;
		m_normalStride: number;
		hasVertexPositions(): boolean;
		hasNormals(): boolean;
		getBufferType(): any;
		getVertexOffset(): number;
		getVertexStride(): number;
		getNormalOffset(): number;
		getNormalStride(): number;
	}
	export class btVoronoiSimplexSolver {
		constructor(); m_numVertices: number;
		m_simplexVectorW: btVector3;
		m_simplexPointsP: btVector3;
		m_simplexPointsQ: btVector3;
		m_cachedP1: btVector3;
		m_cachedP2: btVector3;
		m_cachedV: btVector3;
		m_lastW: btVector3;
		m_equalVertexThreshold: any;
		m_cachedValidClosest: boolean;
		m_cachedBC: btSubSimplexClosestResult;
		m_needsUpdate: boolean;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		removeVertex(index?: number): void;
		reduceVertices(usedVerts?: btUsageBitfield): void;
		updateClosestVectorAndPoints(): boolean;
		closestPtPointTetrahedron(p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, d?: btVector3, finalResult?: btSubSimplexClosestResult): boolean;
		pointOutsideOfPlane(p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, d?: btVector3): number;
		closestPtPointTriangle(p?: btVector3, a?: btVector3, b?: btVector3, c?: btVector3, result?: btSubSimplexClosestResult): boolean;
		reset(): void;
		addVertex(w?: btVector3, p?: btVector3, q?: btVector3): void;
		setEqualVertexThreshold(threshold?: any): void;
		getEqualVertexThreshold(): any;
		closest(v?: btVector3): boolean;
		maxVertex(): any;
		fullSimplex(): boolean;
		getSimplex(pBuf?: btVector3, qBuf?: btVector3, yBuf?: btVector3): number;
		inSimplex(w?: btVector3): boolean;
		backup_closest(v?: btVector3): void;
		emptySimplex(): boolean;
		compute_points(p1?: btVector3, p2?: btVector3): void;
		numVertices(): number;
	}
	export class btWheelContactPoint {
		constructor(body0?: btRigidBody, body1?: btRigidBody, frictionPosWorld?: btVector3, frictionDirectionWorld?: btVector3, maxImpulse?: any); m_body0: btRigidBody;
		m_body1: btRigidBody;
		m_frictionPositionWorld: btVector3;
		m_frictionDirectionWorld: btVector3;
		m_jacDiagABInv: any;
		m_maxImpulse: any;
	}
	export class btWheelInfo {
		constructor(ci?: btWheelInfoConstructionInfo); m_raycastInfo: any;
		m_worldTransform: btTransform;
		m_chassisConnectionPointCS: btVector3;
		m_wheelDirectionCS: btVector3;
		m_wheelAxleCS: btVector3;
		m_suspensionRestLength1: any;
		m_maxSuspensionTravelCm: any;
		m_wheelsRadius: any;
		m_suspensionStiffness: any;
		m_wheelsDampingCompression: any;
		m_wheelsDampingRelaxation: any;
		m_frictionSlip: any;
		m_steering: any;
		m_rotation: any;
		m_deltaRotation: any;
		m_rollInfluence: any;
		m_maxSuspensionForce: any;
		m_engineForce: any;
		m_brake: any;
		m_bIsFrontWheel: boolean;
		m_clientInfo: any;
		m_clippedInvContactDotSuspension: any;
		m_suspensionRelativeVelocity: any;
		m_wheelsSuspensionForce: any;
		m_skidInfo: any;
		getSuspensionRestLength(): any;
		updateWheel(chassis?: btRigidBody, raycastInfo?: any): void;
	}
	export class btWheelInfoConstructionInfo {
		constructor(); m_chassisConnectionCS: btVector3;
		m_wheelDirectionCS: btVector3;
		m_wheelAxleCS: btVector3;
		m_suspensionRestLength: any;
		m_maxSuspensionTravelCm: any;
		m_wheelRadius: any;
		m_suspensionStiffness: any;
		m_wheelsDampingCompression: any;
		m_wheelsDampingRelaxation: any;
		m_frictionSlip: any;
		m_maxSuspensionForce: any;
		m_bIsFrontWheel: boolean;
	}
	export class btWorldImporter {
		constructor(world?: btDynamicsWorld); m_dynamicsWorld: btDynamicsWorld;
		m_verboseMode: number;
		m_allocatedCollisionShapes: any;
		m_allocatedRigidBodies: any;
		m_allocatedConstraints: any;
		m_allocatedBvhs: any;
		m_allocatedTriangleInfoMaps: any;
		m_allocatedTriangleIndexArrays: any;
		m_allocatedbtStridingMeshInterfaceDatas: any;
		m_allocatedNames: any;
		m_indexArrays: any;
		m_shortIndexArrays: any;
		m_charIndexArrays: any;
		m_floatVertexArrays: any;
		m_doubleVertexArrays: any;
		m_bvhMap: any;
		m_timMap: any;
		m_nameShapeMap: any;
		m_nameBodyMap: any;
		m_nameConstraintMap: any;
		m_objectNameMap: any;
		m_shapeMap: any;
		m_bodyMap: any;
		deleteAllData(): void;
		setVerboseMode(verboseMode?: number): void;
		getVerboseMode(): number;
		getNumCollisionShapes(): number;
		getCollisionShapeByIndex(index?: number): btCollisionShape;
		getNumRigidBodies(): number;
		getRigidBodyByIndex(index?: number): btCollisionObject;
		getNumConstraints(): number;
		getConstraintByIndex(index?: number): btTypedConstraint;
		getNumBvhs(): number;
		getBvhByIndex(index?: number): btOptimizedBvh;
		getNumTriangleInfoMaps(): number;
		getTriangleInfoMapByIndex(index?: number): btTriangleInfoMap;
		getCollisionShapeByName(name?: string): btCollisionShape;
		getRigidBodyByName(name?: string): btRigidBody;
		getConstraintByName(name?: string): btTypedConstraint;
		getNameForPointer(ptr?: void): any;
		setDynamicsWorldInfo(gravity?: btVector3, solverInfo?: btContactSolverInfo): void;
		createRigidBody(isDynamic?: boolean, mass?: any, startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string): btRigidBody;
		createCollisionObject(startTransform?: btTransform, shape?: btCollisionShape, bodyName?: string): btCollisionObject;
		createPlaneShape(planeNormal?: btVector3, planeConstant?: any): btCollisionShape;
		createBoxShape(halfExtents?: btVector3): btCollisionShape;
		createSphereShape(radius?: any): btCollisionShape;
		createCapsuleShapeX(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeY(radius?: any, height?: any): btCollisionShape;
		createCapsuleShapeZ(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeX(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeY(radius?: any, height?: any): btCollisionShape;
		createCylinderShapeZ(radius?: any, height?: any): btCollisionShape;
		createConeShapeX(radius?: any, height?: any): btCollisionShape;
		createConeShapeY(radius?: any, height?: any): btCollisionShape;
		createConeShapeZ(radius?: any, height?: any): btCollisionShape;
		createTriangleMeshContainer(): btTriangleIndexVertexArray;
		createBvhTriangleMeshShape(trimesh?: btStridingMeshInterface, bvh?: btOptimizedBvh): btBvhTriangleMeshShape;
		createConvexTriangleMeshShape(trimesh?: btStridingMeshInterface): btCollisionShape;
		createGimpactShape(trimesh?: btStridingMeshInterface): btGImpactMeshShape;
		createStridingMeshInterfaceData(interfaceData?: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
		createConvexHullShape(): btConvexHullShape;
		createCompoundShape(): btCompoundShape;
		createScaledTrangleMeshShape(meshShape?: btBvhTriangleMeshShape, localScalingbtBvhTriangleMeshShape?: btVector3): btScaledBvhTriangleMeshShape;
		createMultiSphereShape(positions?: btVector3, radi?: any, numSpheres?: number): btMultiSphereShape;
		createMeshInterface(meshData?: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
		createOptimizedBvh(): btOptimizedBvh;
		createTriangleInfoMap(): btTriangleInfoMap;
		createPoint2PointConstraint(rbA?: btRigidBody, rbB?: btRigidBody, pivotInA?: btVector3, pivotInB?: btVector3): btPoint2PointConstraint;
		createPoint2PointConstraint(rbA?: btRigidBody, pivotInA?: btVector3): btPoint2PointConstraint;
		createHingeConstraint(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform, useReferenceFrameA?: boolean): btHingeConstraint;
		createHingeConstraint(rbA?: btRigidBody, rbAFrame?: btTransform, useReferenceFrameA?: boolean): btHingeConstraint;
		createConeTwistConstraint(rbA?: btRigidBody, rbB?: btRigidBody, rbAFrame?: btTransform, rbBFrame?: btTransform): btConeTwistConstraint;
		createConeTwistConstraint(rbA?: btRigidBody, rbAFrame?: btTransform): btConeTwistConstraint;
		createGeneric6DofConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btGeneric6DofConstraint;
		createGeneric6DofConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameB?: boolean): btGeneric6DofConstraint;
		createGeneric6DofSpringConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btGeneric6DofSpringConstraint;
		createGeneric6DofSpring2Constraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, rotateOrder?: number): btGeneric6DofSpring2Constraint;
		createSliderConstraint(rbA?: btRigidBody, rbB?: btRigidBody, frameInA?: btTransform, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btSliderConstraint;
		createSliderConstraint(rbB?: btRigidBody, frameInB?: btTransform, useLinearReferenceFrameA?: boolean): btSliderConstraint;
		createGearConstraint(rbA?: btRigidBody, rbB?: btRigidBody, axisInA?: btVector3, axisInB?: btVector3, ratio?: any): btGearConstraint;
		duplicateName(name?: string): any;
		convertCollisionShape(shapeData?: btCollisionShapeData): btCollisionShape;
		convertConstraintBackwardsCompatible281(constraintData?: btTypedConstraintData, rbA?: btRigidBody, rbB?: btRigidBody, fileVersion?: number): void;
		convertConstraintFloat(constraintData?: btTypedConstraintFloatData, rbA?: btRigidBody, rbB?: btRigidBody, fileVersion?: number): void;
		convertConstraintDouble(constraintData?: btTypedConstraintDoubleData, rbA?: btRigidBody, rbB?: btRigidBody, fileVersion?: number): void;
		convertRigidBodyFloat(colObjData?: btRigidBodyFloatData): void;
		convertRigidBodyDouble(colObjData?: btRigidBodyDoubleData): void;
	}
	export class BT_BOX_BOX_TRANSFORM_CACHE {
		constructor(); m_T1to0: btVector3;
		m_R1to0: btMatrix3x3;
		m_AR: btMatrix3x3;
		calc_absolute_matrix(): void;
		calc_from_homogenic(trans0?: btTransform, trans1?: btTransform): void;
		calc_from_full_invert(trans0?: btTransform, trans1?: btTransform): void;
		transform(point?: btVector3): btVector3;
	}
	export class BT_QUANTIZED_BVH_NODE {
		constructor(); m_quantizedAabbMin: number;
		m_quantizedAabbMax: number;
		m_escapeIndexOrDataIndex: number;
		isLeafNode(): boolean;
		getEscapeIndex(): number;
		setEscapeIndex(index?: number): void;
		getDataIndex(): number;
		setDataIndex(index?: number): void;
		testQuantizedBoxOverlapp(quantizedMin?: number, quantizedMax?: number): boolean;
	}
	export class CastResult {
		constructor(); m_hitTransformA: btTransform;
		m_hitTransformB: btTransform;
		m_normal: btVector3;
		m_hitPoint: btVector3;
		m_fraction: any;
		m_debugDrawer: btIDebugDraw;
		m_allowedPenetration: any;
		DebugDraw(fraction?: any): void;
		drawCoordSystem(trans?: btTransform): void;
		reportFailure(errNo?: number, numIterations?: number): void;
	}
	export class CheckOverlapCallback {
		constructor(); processOverlap(pair?: btBroadphasePair): boolean;
		btOverlapCallback(): any;
	}
	export class ChildShapeRetriever {
		constructor(); m_parent: any;
		getChildShape(index?: number): btCollisionShape;
	}
	export class ChunkUtils { constructor(); }
	export class CJoint {
		constructor(); m_life: number;
		m_maxlife: number;
		m_rpos: btVector3;
		m_normal: btVector3;
		m_friction: any;
		m_bodies: any;
		m_refs: btVector3;
		m_cfm: any;
		m_erp: any;
		m_split: any;
		m_drift: btVector3;
		m_sdrift: btVector3;
		m_massmatrix: btMatrix3x3;
		m_delete: boolean;
		Prepare(dt?: any, iterations?: number): void;
		Solve(dt?: any, sor?: any): void;
		Terminate(dt?: any): void;
		Type(): any;
		Joint(): any;
		Joint(): any;
	}
	export class ClipVertex {
		constructor(); v: btVector3;
		id: number;
	}
	export class ClosestConvexResultCallback {
		constructor(convexFromWorld?: btVector3, convexToWorld?: btVector3); m_convexFromWorld: btVector3;
		m_convexToWorld: btVector3;
		m_hitNormalWorld: btVector3;
		m_hitPointWorld: btVector3;
		m_hitCollisionObject: btCollisionObject;
		m_closestHitFraction: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		addSingleResult(convexResult?: any, normalInWorldSpace?: boolean): any;
		ConvexResultCallback(): any;
		ConvexResultCallback(): any;
		hasHit(): boolean;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
	}
	export class ClosestPointInput {
		constructor(); m_transformA: btTransform;
		m_transformB: btTransform;
		m_maximumDistanceSquared: any;
	}
	export class ClosestRayResultCallback {
		constructor(rayFromWorld?: btVector3, rayToWorld?: btVector3); m_rayFromWorld: btVector3;
		m_rayToWorld: btVector3;
		m_hitNormalWorld: btVector3;
		m_hitPointWorld: btVector3;
		m_closestHitFraction: any;
		m_collisionObject: btCollisionObject;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_flags: number;
		addSingleResult(rayResult?: any, normalInWorldSpace?: boolean): any;
		RayResultCallback(): any;
		hasHit(): boolean;
		RayResultCallback(): any;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
	}
	export class Cluster {
		constructor(); m_masses: any;
		m_nodes: any;
		m_framerefs: any;
		m_framexform: btTransform;
		m_idmass: any;
		m_imass: any;
		m_locii: btMatrix3x3;
		m_invwi: btMatrix3x3;
		m_com: btVector3;
		m_vimpulses: btVector3;
		m_dimpulses: btVector3;
		m_nvimpulses: number;
		m_ndimpulses: number;
		m_lv: btVector3;
		m_av: btVector3;
		m_leaf: btDbvtNode;
		m_ndamping: any;
		m_ldamping: any;
		m_adamping: any;
		m_matching: any;
		m_maxSelfCollisionImpulse: any;
		m_selfCollisionImpulseFactor: any;
		m_containsAnchor: boolean;
		m_collide: boolean;
		m_clusterIndex: number;
	}
	export class ClusterBase {
		constructor(); erp: any;
		idt: any;
		m_margin: any;
		friction: any;
		threshold: any;
		SolveContact(res?: any, ba?: any, bb?: any, joint?: any): boolean;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class CollideCL_RS {
		constructor(); psb: btSoftBody;
		m_colObjWrap: btCollisionObjectWrapper;
		erp: any;
		idt: any;
		m_margin: any;
		friction: any;
		threshold: any;
		Process(leaf?: btDbvtNode): void;
		ProcessColObj(ps?: btSoftBody, colObWrap?: btCollisionObjectWrapper): void;
		ClusterBase(): any;
		SolveContact(res?: any, ba?: any, bb?: any, joint?: any): boolean;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class CollideCL_SS {
		constructor(); bodies: btSoftBody;
		erp: any;
		idt: any;
		m_margin: any;
		friction: any;
		threshold: any;
		Process(la?: btDbvtNode, lb?: btDbvtNode): void;
		ProcessSoftSoft(psa?: btSoftBody, psb?: btSoftBody): void;
		ClusterBase(): any;
		SolveContact(res?: any, ba?: any, bb?: any, joint?: any): boolean;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class CollideSDF_RS {
		constructor(); psb: btSoftBody;
		m_colObj1Wrap: btCollisionObjectWrapper;
		m_rigidBody: btRigidBody;
		dynmargin: any;
		stamargin: any;
		Process(leaf?: btDbvtNode): void;
		DoNode(n?: any): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class CollideVF_SS {
		constructor(); psb: btSoftBody;
		mrg: any;
		Process(lnode?: btDbvtNode, lface?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class CompoundPrimitiveManager {
		constructor(compoundShape?: btGImpactCompoundShape); m_compoundShape: btGImpactCompoundShape;
		is_trimesh(): boolean;
		get_primitive_count(): number;
		get_primitive_box(prim_index?: number, primbox?: btAABB): void;
		get_primitive_triangle(prim_index?: number, triangle?: btPrimitiveTriangle): void;
		btPrimitiveManagerBase(): any;
	}
	export class ConcreteContactResultCallback {
		constructor(); m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
		addSingleResult(cp?: btManifoldPoint, colObj0Wrap?: btCollisionObjectWrapper, partId0?: number, index0?: number, colObj1Wrap?: btCollisionObjectWrapper, partId1?: number, index1?: number): any;
	}
	export class Config {
		constructor(); aeromodel: any;
		kVCF: any;
		kDP: any;
		kDG: any;
		kLF: any;
		kPR: any;
		kVC: any;
		kDF: any;
		kMT: any;
		kCHR: any;
		kKHR: any;
		kSHR: any;
		kAHR: any;
		kSRHR_CL: any;
		kSKHR_CL: any;
		kSSHR_CL: any;
		kSR_SPLT_CL: any;
		kSK_SPLT_CL: any;
		kSS_SPLT_CL: any;
		maxvolume: any;
		timescale: any;
		viterations: number;
		piterations: number;
		diterations: number;
		citerations: number;
		collisions: number;
		m_vsequence: any;
		m_psequence: any;
		m_dsequence: any;
	}
	export class ContactResultCallback {
		constructor(); m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
		addSingleResult(cp?: btManifoldPoint, colObj0Wrap?: btCollisionObjectWrapper, partId0?: number, index0?: number, colObj1Wrap?: btCollisionObjectWrapper, partId1?: number, index1?: number): any;
	}
	export class CONTACT_KEY_TOKEN {
		constructor(key?: number, token?: number); m_key: number;
		m_value: number;
	}
	export class CONTACT_KEY_TOKEN_COMP { constructor(); }
	export class ConvexH {
		constructor(vertices_size?: number, edges_size?: number, facets_size?: number); vertices: any;
		edges: any;
		facets: any;
	}
	export class ConvexResultCallback {
		constructor(); m_closestHitFraction: any;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		hasHit(): boolean;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
		addSingleResult(convexResult?: any, normalInWorldSpace?: boolean): any;
	}
	export class Coplanar {
		constructor(); ea: number;
		v0: string;
		v1: string;
	}
	export class copy_elements_func { constructor(); }
	export class CProfileIterator {
		constructor(start?: any); CurrentParent: any;
		CurrentChild: any;
		First(arg1?: any): void;
		Next(arg1?: any): void;
		Is_Done(arg1?: any): boolean;
		Is_Root(arg1?: any): boolean;
		Enter_Child(index?: number): void;
		Enter_Largest_Child(arg1?: any): void;
		Enter_Parent(arg1?: any): void;
		Get_Current_Name(arg1?: any): any;
		Get_Current_Total_Calls(arg1?: any): number;
		Get_Current_Total_Time(arg1?: any): number;
		Get_Current_UserPointer(arg1?: any): any;
		Set_Current_UserPointer(ptr?: void): void;
		Get_Current_Parent_Name(arg1?: any): any;
		Get_Current_Parent_Total_Calls(arg1?: any): number;
		Get_Current_Parent_Total_Time(arg1?: any): number;
	}
	export class CProfileManager { constructor(); }
	export class CProfileNode {
		constructor(name?: string, parent?: any); Name: any;
		TotalCalls: number;
		TotalTime: number;
		StartTime: number;
		RecursionCounter: number;
		Parent: any;
		Child: any;
		Sibling: any;
		m_userPtr: any;
		Get_Sub_Node(name?: string): any;
		Get_Parent(arg1?: any): any;
		Get_Sibling(arg1?: any): any;
		Get_Child(arg1?: any): any;
		CleanupMemory(): void;
		Reset(arg1?: any): void;
		Call(arg1?: any): void;
		Return(arg1?: any): boolean;
		Get_Name(arg1?: any): any;
		Get_Total_Calls(arg1?: any): number;
		Get_Total_Time(arg1?: any): number;
		GetUserPointer(): any;
		SetUserPointer(ptr?: void): void;
	}
	export class CProfileSample { constructor(arg1?: any); }
	export class CreateFunc {
		constructor(); CreateCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): btCollisionAlgorithm;
		btCollisionAlgorithmCreateFunc(): any;
		btCollisionAlgorithmCreateFunc(): any;
	}
	export class DebugDrawcallback {
		constructor(debugDrawer?: btIDebugDraw, worldTrans?: btTransform, color?: btVector3); m_debugDrawer: btIDebugDraw;
		m_color: btVector3;
		m_worldTrans: btTransform;
		internalProcessTriangleIndex(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btTriangleCallback(): any;
		btInternalTriangleIndexCallback(): any;
	}
	export class DefaultColors {
		constructor(); m_activeObject: btVector3;
		m_deactivatedObject: btVector3;
		m_wantsDeactivationObject: btVector3;
		m_disabledDeactivationObject: btVector3;
		m_disabledSimulationObject: btVector3;
		m_aabb: btVector3;
		m_contactPoint: btVector3;
	}
	export class DISTANCE_PLANE_3D_FUNC { constructor(); }
	export class DMul { constructor(); }
	export class eAeroModel { constructor(); }
	export class Edge {
		constructor(); next: any;
		prev: any;
		reverse: any;
		target: any;
		face: any;
		copy: number;
		link(n?: any): void;
	}
	export class EdgeFlag {
		constructor(); planetest: string;
		fixes: string;
		undermap: number;
		overmap: number;
	}
	export class eFeature { constructor(); }
	export class Element {
		constructor(); m_tag: any;
	}
	export class EPA {
		constructor(); root: any;
		count: any;
		sList(): any;
	}
	export class ePSolver { constructor(); }
	export class eSolverPresets { constructor(); }
	export class eStatus { constructor(); }
	export class eType { constructor(); }
	export class eVSolver { constructor(); }
	export class Face {
		constructor(); m_n: any;
		m_normal: btVector3;
		m_ra: any;
		m_leaf: btDbvtNode;
		m_material: any;
		m_tag: any;
	}
	export class fCollision { constructor(); }
	export class fDrawFlags { constructor(); }
	export class Feature {
		constructor(); m_material: any;
		m_tag: any;
	}
	export class fMaterial { constructor(); }
	export class GIM_AABB {
		constructor(V1?: btVector3, V2?: btVector3, V3?: btVector3, margin?: any); m_min: btVector3;
		m_max: btVector3;
		invalidate(): void;
		increment_margin(margin?: any): void;
		copy_with_margin(other?: any, margin?: any): void;
		appy_transform(trans?: btTransform): void;
		merge(box?: any): void;
		get_center_extend(center?: btVector3, extend?: btVector3): void;
		find_intersection(other?: any, intersection?: any): void;
		has_collision(other?: any): boolean;
		collide_ray(vorigin?: btVector3, vdir?: btVector3): boolean;
		projection_interval(direction?: btVector3, vmin?: any, vmax?: any): void;
		plane_classify(plane?: btVector4): any;
		overlapping_trans_conservative(box?: any, trans1_to_0?: btTransform): boolean;
		overlapping_trans_cache(box?: any, transcache?: any, fulltest?: boolean): boolean;
		collide_plane(plane?: btVector4): boolean;
		collide_triangle_exact(p1?: btVector3, p2?: btVector3, p3?: btVector3, triangle_plane?: btVector4): boolean;
	}
	export class GIM_AABB_DATA {
		constructor(); m_bound: any;
		m_data: any;
	}
	export class gim_array {
		constructor(reservesize?: any); m_data: any;
		m_size: any;
		m_allocated_size: any;
		destroyData(): void;
		resizeData(newsize?: any): boolean;
		growingCheck(): boolean;
		reserve(size?: any): boolean;
		clear_range(start_range?: any): void;
		clear(): void;
		clear_memory(): void;
		size(): any;
		max_size(): any;
		pointer(): any;
		pointer(): any;
		get_pointer_at(i?: any): any;
		get_pointer_at(i?: any): any;
		at(i?: any): any;
		at(i?: any): any;
		front(): any;
		front(): any;
		back(): any;
		back(): any;
		swap(i?: any, j?: any): void;
		push_back(obj?: any): void;
		push_back_mem(): void;
		push_back_memcpy(obj?: any): void;
		pop_back(): void;
		pop_back_mem(): void;
		erase(index?: any): void;
		erase_sorted_mem(index?: any): void;
		erase_sorted(index?: any): void;
		insert_mem(index?: any): void;
		insert(obj?: any, index?: any): void;
		resize(size?: any, call_constructor?: boolean, fillData?: any): void;
		refit(): void;
	}
	export class gim_bitset {
		constructor(bits_count?: any); m_container: any;
		resize(newsize?: any): boolean;
		size(): any;
		set_all(): void;
		clear_all(): void;
		set(bit_index?: any): void;
		get(bit_index?: any): string;
		clear(bit_index?: any): void;
	}
	export class GIM_BOX_BOX_TRANSFORM_CACHE {
		constructor(trans1_to_0?: any); m_T1to0: btVector3;
		m_R1to0: btMatrix3x3;
		m_AR: btMatrix3x3;
		calc_absolute_matrix(): void;
		calc_from_homogenic(trans0?: btTransform, trans1?: btTransform): void;
		calc_from_full_invert(trans0?: btTransform, trans1?: btTransform): void;
		transform(point?: btVector3): btVector3;
	}
	export class GIM_BOX_TREE {
		constructor(); m_num_nodes: any;
		m_node_array: any;
		build_tree(primitive_boxes?: any): void;
		clearNodes(): void;
		getNodeCount(): any;
		isLeafNode(nodeindex?: any): boolean;
		getNodeData(nodeindex?: any): any;
		getNodeBound(nodeindex?: any, bound?: any): void;
		setNodeBound(nodeindex?: any, bound?: any): void;
		getLeftNodeIndex(nodeindex?: any): any;
		getRightNodeIndex(nodeindex?: any): any;
		getScapeNodeIndex(nodeindex?: any): any;
		_sort_and_calc_splitting_index(primitive_boxes?: any, startIndex?: any, endIndex?: any, splitAxis?: any): any;
		_calc_splitting_axis(primitive_boxes?: any, startIndex?: any, endIndex?: any): any;
		_build_sub_tree(primitive_boxes?: any, startIndex?: any, endIndex?: any): void;
	}
	export class GIM_BOX_TREE_NODE {
		constructor(); m_bound: any;
		m_left: any;
		m_right: any;
		m_escapeIndex: any;
		m_data: any;
		is_leaf_node(): boolean;
	}
	export class GIM_BOX_TREE_SET { constructor(); }
	export class GIM_BOX_TREE_TEMPLATE_SET {
		constructor(); m_primitive_manager: any;
		m_box_tree: any;
		getGlobalBox(): any;
		setPrimitiveManager(primitive_manager?: any): void;
		getPrimitiveManager(): any;
		getPrimitiveManager(): any;
		update(): void;
		buildSet(): void;
		boxQuery(box?: any, collided_results?: any): boolean;
		boxQueryTrans(box?: any, transform?: btTransform, collided_results?: any): boolean;
		rayQuery(ray_dir?: btVector3, ray_origin?: btVector3, collided_results?: any): boolean;
		hasHierarchy(): boolean;
		isTrimesh(): boolean;
		getNodeCount(): any;
		isLeafNode(nodeindex?: any): boolean;
		getNodeData(nodeindex?: any): any;
		getNodeBound(nodeindex?: any, bound?: any): void;
		setNodeBound(nodeindex?: any, bound?: any): void;
		getLeftNodeIndex(nodeindex?: any): any;
		getRightNodeIndex(nodeindex?: any): any;
		getScapeNodeIndex(nodeindex?: any): any;
		getNodeTriangle(nodeindex?: any, triangle?: any): void;
		refit(): void;
	}
	export class GIM_BVH_DATA {
		constructor(); m_bound: btAABB;
		m_data: number;
	}
	export class GIM_BVH_DATA_ARRAY { constructor(); }
	export class GIM_BVH_TREE_NODE {
		constructor(); m_bound: btAABB;
		m_escapeIndexOrDataIndex: number;
		isLeafNode(): boolean;
		getEscapeIndex(): number;
		setEscapeIndex(index?: number): void;
		getDataIndex(): number;
		setDataIndex(index?: number): void;
	} export class GIM_BVH_TREE_NODE_ARRAY {
		constructor();
	} export class GIM_CONTACT {
		constructor(point?: btVector3, normal?: btVector3, depth?: any, feature1?: any, feature2?: any); m_point: btVector3;
		m_normal: btVector3;
		m_depth: any;
		m_distance: any;
		m_feature1: number;
		m_feature2: number;
		calc_key_contact(): number;
		interpolate_normals(normals?: btVector3, normal_count?: number): void;
		calc_key_contact(): any;
		interpolate_normals(normals?: btVector3, normal_count?: any): void;
	}
	export class gim_contact_array {
		constructor(); push_contact(point?: btVector3, normal?: btVector3, depth?: any, feature1?: any, feature2?: any): void;
		push_triangle_contacts(tricontact?: any, feature1?: any, feature2?: any): void;
		merge_contacts(contacts?: any, normal_contact_average?: boolean): void;
		merge_contacts_unique(contacts?: any): void;
		destroyData(): void;
		resizeData(newsize?: any): boolean;
		growingCheck(): boolean;
		reserve(size?: any): boolean;
		clear_range(start_range?: any): void;
		clear(): void;
		clear_memory(): void;
		gim_array(): any;
		gim_array(reservesize?: any): any;
		gim_array(): any;
		size(): any;
		max_size(): any;
		pointer(): any;
		pointer(): any;
		get_pointer_at(i?: any): any;
		get_pointer_at(i?: any): any;
		at(i?: any): any;
		at(i?: any): any;
		front(): any;
		front(): any;
		back(): any;
		back(): any;
		swap(i?: any, j?: any): void;
		push_back(obj?: any): void;
		push_back_mem(): void;
		push_back_memcpy(obj?: any): void;
		pop_back(): void;
		pop_back_mem(): void;
		erase(index?: any): void;
		erase_sorted_mem(index?: any): void;
		erase_sorted(index?: any): void;
		insert_mem(index?: any): void;
		insert(obj?: any, index?: any): void;
		resize(size?: any, call_constructor?: boolean, fillData?: any): void;
		refit(): void;
	}
	export class GIM_HASH_NODE_CMP_KEY_MACRO { constructor(); }
	export class GIM_HASH_NODE_CMP_MACRO { constructor(); }
	export class GIM_HASH_NODE_GET_KEY { constructor(); }
	export class gim_hash_table {
		constructor(reserve_size?: any, node_size?: any, min_hash_table_size?: any); m_nodes: any;
		m_sorted: boolean;
		m_hash_table: any;
		m_table_size: any;
		m_node_size: any;
		m_min_hash_table_size: any;
		is_hash_table(): boolean;
		is_sorted(): boolean;
		sort(): boolean;
		switch_to_hashtable(): boolean;
		switch_to_sorted_array(): boolean;
		check_for_switching_to_hashtable(): boolean;
		set_sorted(value?: boolean): void;
		size(): any;
		get_key(index?: any): any;
		get_value_by_index(index?: any): any;
		find(hashkey?: any): any;
		get_value(hashkey?: any): any;
		erase_by_index(index?: any): boolean;
		erase_by_index_unsorted(index?: any): boolean;
		erase_by_key(hashkey?: any): boolean;
		clear(): void;
		insert(hashkey?: any, element?: any): any;
		insert_override(hashkey?: any, element?: any): any;
		insert_unsorted(hashkey?: any, element?: any): any;
		_find_cell(hashkey?: any): any;
		_find_avaliable_cell(hashkey?: any): any;
		_reserve_table_memory(newtablesize?: any): void;
		_invalidate_keys(): void;
		_clear_table_memory(): void;
		_rehash(): void;
		_resize_table(newsize?: any): void;
		_destroy(): void;
		_assign_hash_table_cell(hashkey?: any): any;
		_erase_by_index_hash_table(index?: any): boolean;
		_erase_hash_table(hashkey?: any): boolean;
		_insert_hash_table(hashkey?: any, value?: any): any;
		_insert_hash_table_replace(hashkey?: any, value?: any): any;
		_erase_sorted(index?: any): boolean;
		_erase_unsorted(index?: any): boolean;
		_insert_in_pos(hashkey?: any, value?: any, pos?: any): void;
		_insert_sorted(hashkey?: any, value?: any): any;
		_insert_sorted_replace(hashkey?: any, value?: any): any;
		_insert_unsorted(hashkey?: any, value?: any): any;
	}
	export class GIM_HASH_TABLE_NODE {
		constructor(key?: any, data?: any); m_key: any;
		m_data: any;
	}
	export class GIM_PAIR {
		constructor(index1?: any, index2?: any);
		m_index1: number;
		m_index2: number;
	}
	export class gim_pair_set {
		constructor(); push_pair(index1?: any, index2?: any): void;
		push_pair_inv(index1?: any, index2?: any): void;
		destroyData(): void;
		resizeData(newsize?: any): boolean;
		growingCheck(): boolean;
		reserve(size?: any): boolean;
		clear_range(start_range?: any): void;
		clear(): void;
		clear_memory(): void;
		gim_array(): any;
		gim_array(reservesize?: any): any;
		gim_array(): any;
		size(): any;
		max_size(): any;
		pointer(): any;
		pointer(): any;
		get_pointer_at(i?: any): any;
		get_pointer_at(i?: any): any;
		at(i?: any): any;
		at(i?: any): any;
		front(): any;
		front(): any;
		back(): any;
		back(): any;
		swap(i?: any, j?: any): void;
		push_back(obj?: any): void;
		push_back_mem(): void;
		push_back_memcpy(obj?: any): void;
		pop_back(): void;
		pop_back_mem(): void;
		erase(index?: any): void;
		erase_sorted_mem(index?: any): void;
		erase_sorted(index?: any): void;
		insert_mem(index?: any): void;
		insert(obj?: any, index?: any): void;
		resize(size?: any, call_constructor?: boolean, fillData?: any): void;
		refit(): void;
	}
	export class GIM_PRIMITIVE_MANAGER_PROTOTYPE {
		constructor(); is_trimesh(): boolean;
		get_primitive_count(): any;
		get_primitive_box(prim_index?: any, primbox?: any): void;
		get_primitive_triangle(prim_index?: any, triangle?: any): void;
	}
	export class GIM_QUANTIZED_BVH_NODE_ARRAY { constructor(); }
	export class GIM_RSORT_TOKEN {
		constructor(rtoken?: any); m_key: any;
		m_value: any;
	}
	export class GIM_RSORT_TOKEN_COMPARATOR { constructor(); }
	export class GIM_ShapeRetriever {
		constructor(gim_shape?: btGImpactShapeInterface); m_gim_shape: btGImpactShapeInterface;
		m_trishape: btTriangleShapeEx;
		m_tetrashape: btTetrahedronShapeEx;
		m_child_retriever: any;
		m_tri_retriever: any;
		m_tetra_retriever: any;
		m_current_retriever: any;
		getChildShape(index?: number): btCollisionShape;
	}
	export class GIM_STANDARD_ALLOCATOR {
		constructor(); get_pool_capacity(): any;
		btGenericPoolAllocator(pool_element_size?: any, pool_element_count?: any): any;
		btGenericPoolAllocator(): any;
		allocate(size_bytes?: any): any;
		freeMemory(pointer?: void): boolean;
	}
	export class GIM_TREE_TREE_COLLIDER {
		constructor(); m_collision_pairs: any;
		m_boxset0: any;
		m_boxset1: any;
		current_node0: any;
		current_node1: any;
		node0_is_leaf: boolean;
		node1_is_leaf: boolean;
		t0_is_trimesh: boolean;
		t1_is_trimesh: boolean;
		node0_has_triangle: boolean;
		node1_has_triangle: boolean;
		m_box0: any;
		m_box1: any;
		trans_cache_1to0: any;
		trans_cache_0to1: btTransform;
		m_tri0: any;
		m_tri0_plane: btVector4;
		m_tri1: any;
		m_tri1_plane: btVector4;
		find_collision(boxset1?: any, trans1?: btTransform, boxset2?: any, trans2?: btTransform, collision_pairs?: any, complete_primitive_tests?: boolean): void;
		retrieve_node0_triangle(node0?: any): void;
		retrieve_node1_triangle(node1?: any): void;
		retrieve_node0_info(node0?: any): void;
		retrieve_node1_info(node1?: any): void;
		node_collision(node0?: any, node1?: any): boolean;
		find_collision_pairs(): void;
	}
	export class GIM_TRIANGLE {
		constructor(); m_margin: any;
		m_vertices: btVector3;
		get_box(): any;
		get_normal(normal?: btVector3): void;
		get_plane(plane?: btVector4): void;
		apply_transform(trans?: btTransform): void;
		get_edge_plane(edge_index?: any, triangle_normal?: btVector3, plane?: btVector4): void;
		get_triangle_transform(triangle_transform?: btTransform): void;
		collide_triangle_hard_test(other?: any, contact_data?: any): boolean;
		collide_triangle(other?: any, contact_data?: any): boolean;
		get_uv_parameters(point?: btVector3, tri_plane?: btVector3, u?: any, v?: any): boolean;
		is_point_inside(point?: btVector3, tri_normal?: btVector3): boolean;
		ray_collision(vPoint?: btVector3, vDir?: btVector3, pout?: btVector3, triangle_normal?: btVector3, tparam?: any, tmax?: any): boolean;
		ray_collision_front_side(vPoint?: btVector3, vDir?: btVector3, pout?: btVector3, triangle_normal?: btVector3, tparam?: any, tmax?: any): boolean;
	}
	export class GIM_TRIANGLE_CALCULATION_CACHE {
		constructor(); margin: any;
		tu_vertices: btVector3;
		tv_vertices: btVector3;
		tu_plane: btVector4;
		tv_plane: btVector4;
		closest_point_u: btVector3;
		closest_point_v: btVector3;
		edge_edge_dir: btVector3;
		distances: btVector3;
		du: any;
		du0du1: any;
		du0du2: any;
		dv: any;
		dv0dv1: any;
		dv0dv2: any;
		temp_points: btVector3;
		temp_points1: btVector3;
		contact_points: btVector3;
		compute_intervals(D0?: any, D1?: any, D2?: any, D0D1?: any, D0D2?: any, scale_edge0?: any, scale_edge1?: any, edge_index0?: any, edge_index1?: any): boolean;
		clip_triangle(tri_plane?: btVector4, tripoints?: btVector3, srcpoints?: btVector3, clip_points?: btVector3): any;
		sort_isect(isect0?: any, isect1?: any, e0?: any, e1?: any, vec0?: btVector3, vec1?: btVector3): void;
		cross_line_intersection_test(): any;
		triangle_collision(u0?: btVector3, u1?: btVector3, u2?: btVector3, margin_u?: any, v0?: btVector3, v1?: btVector3, v2?: btVector3, margin_v?: any, contacts?: any): boolean;
	}
	export class GIM_TRIANGLE_CONTACT {
		constructor(other?: any); m_penetration_depth: any;
		m_point_count: number;
		m_separating_normal: btVector4;
		m_points: btVector3;
		copy_from(other?: any): void;
		merge_points(plane?: btVector4, margin?: any, points?: btVector3, point_count?: number): void;
	}
	export class GIM_TRIANGLE_CONTACT_DATA {
		constructor(other?: any); m_penetration_depth: any;
		m_point_count: any;
		m_separating_normal: btVector4;
		m_points: btVector3;
		copy_from(other?: any): void;
		merge_points(plane?: btVector4, margin?: any, points?: btVector3, point_count?: any): void;
	}
	export class GJK {
		constructor(); d: btVector3;
		w: btVector3;
	}
	export class GrahamVector3 {
		constructor(org?: btVector3, orgIndex?: number); m_angle: any;
		m_orgIndex: number;
		m_floats: any;
		BT_DECLARE_ALIGNED_ALLOCATOR(): any;
		btVector3(): any;
		btVector3(_x?: any, _y?: any, _z?: any): any;
		op_add(v?: btVector3): btVector3;
		op_sub(v?: btVector3): btVector3;
		dot(v?: btVector3): any;
		length2(): any;
		length(): any;
		norm(): any;
		distance2(v?: btVector3): any;
		distance(v?: btVector3): any;
		safeNormalize(): btVector3;
		normalize(): btVector3;
		normalized(): btVector3;
		rotate(wAxis?: btVector3, angle?: any): btVector3;
		angle(v?: btVector3): any;
		absolute(): btVector3;
		cross(v?: btVector3): btVector3;
		triple(v1?: btVector3, v2?: btVector3): any;
		minAxis(): number;
		maxAxis(): number;
		furthestAxis(): number;
		closestAxis(): number;
		setInterpolate3(v0?: btVector3, v1?: btVector3, rt?: any): void;
		lerp(v?: btVector3, t?: any): btVector3;
		op_mul(v?: btVector3): btVector3;
		getX(): any;
		getY(): any;
		getZ(): any;
		setX(_x?: any): void;
		setY(_y?: any): void;
		setZ(_z?: any): void;
		setW(_w?: any): void;
		x(): any;
		y(): any;
		z(): any;
		w(): any;
		operator(): any;
		operator(): any;
		setMax(other?: btVector3): void;
		setMin(other?: btVector3): void;
		setValue(_x?: any, _y?: any, _z?: any): void;
		getSkewSymmetricMatrix(v0?: btVector3, v1?: btVector3, v2?: btVector3): void;
		setZero(): void;
		isZero(): boolean;
		fuzzyZero(): boolean;
		serialize(dataOut?: any): void;
		deSerialize(dataIn?: any): void;
		serializeFloat(dataOut?: btVector3FloatData): void;
		deSerializeFloat(dataIn?: btVector3FloatData): void;
		serializeDouble(dataOut?: btVector3DoubleData): void;
		deSerializeDouble(dataIn?: btVector3DoubleData): void;
		maxDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		minDot(array?: btVector3, array_count?: number, dotOut?: any): number;
		dot3(v0?: btVector3, v1?: btVector3, v2?: btVector3): btVector3;
	}
	export class HalfEdge {
		constructor(_ea?: number, _v?: string, _p?: string); ea: number;
		v: string;
		p: string;
	}
	export class HullDesc {
		constructor(flag?: any, vcount?: number, vertices?: btVector3, stride?: number); mFlags: number;
		mVcount: number;
		mVertices: btVector3;
		mVertexStride: number;
		mNormalEpsilon: any;
		mMaxVertices: number;
		mMaxFaces: number;
		HasHullFlag(flag?: any): boolean;
		SetHullFlag(flag?: any): void;
		ClearHullFlag(flag?: any): void;
	}
	export class HullLibrary {
		constructor(); m_vertexIndexMapping: any;
		m_tris: any;
		CreateConvexHull(desc?: any, result?: any): any;
		ReleaseResult(result?: any): any;
		ComputeHull(vcount?: number, vertices?: btVector3, result?: any, vlimit?: number): boolean;
		allocateTriangle(a?: number, b?: number, c?: number): btHullTriangle;
		deAllocateTriangle(arg1?: btHullTriangle): void;
		b2bfix(s?: btHullTriangle, t?: btHullTriangle): void;
		removeb2b(s?: btHullTriangle, t?: btHullTriangle): void;
		checkit(t?: btHullTriangle): void;
		extrudable(epsilon?: any): btHullTriangle;
		calchull(verts?: btVector3, verts_count?: number, tris_out?: any, tris_count?: number, vlimit?: number): number;
		calchullgen(verts?: btVector3, verts_count?: number, vlimit?: number): number;
		FindSimplex(verts?: btVector3, verts_count?: number, allow?: any): any;
		ConvexHCrop(convex?: any, slice?: btPlane): any;
		extrude(t0?: btHullTriangle, v?: number): void;
		test_cube(): any;
		BringOutYourDead(verts?: btVector3, vcount?: number, overts?: btVector3, ocount?: number, indices?: number, indexcount?: any): void;
		CleanupVertices(svcount?: number, svertices?: btVector3, stride?: number, vcount?: number, vertices?: btVector3, normalepsilon?: any, scale?: btVector3): boolean;
	}
	export class HullResult {
		constructor(arg1?: any); mPolygons: boolean;
		mNumOutputVertices: number;
		m_OutputVertices: any;
		mNumFaces: number;
		mNumIndices: number;
		m_Indices: any;
	}
	export class IClone {
		constructor(); CloneLeaf(arg1?: btDbvtNode): void;
	}
	export class ICollide {
		constructor(); Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class IControl {
		constructor(); Prepare(arg1?: any): void;
		Speed(arg1?: any, current?: any): any;
	}
	export class ImplicitFn {
		constructor(); Eval(x?: btVector3): any;
	}
	export class Impulse {
		constructor(); m_velocity: btVector3;
		m_drift: btVector3;
		m_asVelocity: number;
		m_asDrift: number;
	}
	export class InplaceSolverIslandCallback {
		constructor(solver?: btConstraintSolver, stackAlloc?: btStackAlloc, dispatcher?: btDispatcher); m_solverInfo: btContactSolverInfo;
		m_solver: btConstraintSolver;
		m_sortedConstraints: btTypedConstraint;
		m_numConstraints: number;
		m_debugDrawer: btIDebugDraw;
		m_dispatcher: btDispatcher;
		m_bodies: any;
		m_manifolds: any;
		m_constraints: any;
		setup(solverInfo?: btContactSolverInfo, sortedConstraints?: btTypedConstraint, numConstraints?: number, debugDrawer?: btIDebugDraw): void;
		processIsland(bodies?: btCollisionObject, numBodies?: number, manifolds?: btPersistentManifold, numManifolds?: number, islandId?: number): void;
		processConstraints(): void;
		IslandCallback(): any;
	}
	export class Int128 {
		constructor(low?: any, high?: any); low: any;
		high: any;
		toScalar(): any;
		getSign(): number;
		ucmp(b?: any): number;
	}
	export class int3 {
		constructor(_x?: number, _y?: number, _z?: number); x: number;
		y: number;
		z: number;
	}
	export class int4 {
		constructor(_x?: number, _y?: number, _z?: number, _w?: number); x: number;
		y: number;
		z: number;
		w: number;
	}
	export class integer_comparator { constructor(); }
	export class IntermediateHull {
		constructor(); minXy: any;
		maxXy: any;
		minYx: any;
		maxYx: any;
		print(): void;
	}
	export class IslandCallback {
		constructor(); processIsland(bodies?: btCollisionObject, numBodies?: number, manifolds?: btPersistentManifold, numManifolds?: number, islandId?: number): void;
	}
	export class IWriter {
		constructor(); Prepare(root?: btDbvtNode, numnodes?: number): void;
		WriteNode(arg1?: btDbvtNode, index?: number, parent?: number, child0?: number, child1?: number): void;
		WriteLeaf(arg1?: btDbvtNode, index?: number, parent?: number): void;
	}
	export class Joint {
		constructor(); m_bodies: any;
		m_refs: btVector3;
		m_cfm: any;
		m_erp: any;
		m_split: any;
		m_drift: btVector3;
		m_sdrift: btVector3;
		m_massmatrix: btMatrix3x3;
		m_delete: boolean;
		Prepare(dt?: any, iterations?: number): void;
		Solve(dt?: any, sor?: any): void;
		Terminate(dt?: any): void;
		Type(): any;
	}
	export class less_comparator { constructor(); }
	export class Link {
		constructor(); m_n: any;
		m_rl: any;
		m_bbending: number;
		m_c0: any;
		m_c1: any;
		m_c2: any;
		m_c3: btVector3;
		m_material: any;
		m_tag: any;
	}
	export class LinkDeps_t {
		constructor(); value: number;
		next: any;
	}
	export class ListBase {
		constructor(); first: any;
		last: any;
	}
	export class LJoint {
		constructor(); m_rpos: btVector3;
		m_bodies: any;
		m_refs: btVector3;
		m_cfm: any;
		m_erp: any;
		m_split: any;
		m_drift: btVector3;
		m_sdrift: btVector3;
		m_massmatrix: btMatrix3x3;
		m_delete: boolean;
		Prepare(dt?: any, iterations?: number): void;
		Solve(dt?: any, sor?: any): void;
		Terminate(dt?: any): void;
		Type(): any;
		Joint(): any;
		Joint(): any;
	}
	export class LocalConvexResult {
		constructor(hitCollisionObject?: btCollisionObject, localShapeInfo?: any, hitNormalLocal?: btVector3, hitPointLocal?: btVector3, hitFraction?: any); m_hitCollisionObject: btCollisionObject;
		m_localShapeInfo: any;
		m_hitNormalLocal: btVector3;
		m_hitPointLocal: btVector3;
		m_hitFraction: any;
	}
	export class LocalRayResult {
		constructor(collisionObject?: btCollisionObject, localShapeInfo?: any, hitNormalLocal?: btVector3, hitFraction?: any); m_collisionObject: btCollisionObject;
		m_localShapeInfo: any;
		m_hitNormalLocal: btVector3;
		m_hitFraction: any;
	}
	export class LocalShapeInfo {
		constructor(); m_shapePart: number;
		m_triangleIndex: number;
	}
	export class LocalSupportVertexCallback {
		constructor(supportVecLocal?: btVector3); m_maxDot: any;
		m_supportVecLocal: btVector3;
		m_supportVertexLocal: btVector3;
		internalProcessTriangleIndex(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		GetSupportVertexLocal(): btVector3;
		btInternalTriangleIndexCallback(): any;
	}
	export class Material {
		constructor(); m_kLST: any;
		m_kAST: any;
		m_kVST: any;
		m_flags: number;
		m_tag: any;
	}
	export class memcopy_elements_func { constructor(); }
	export class MinkowskiDiff {
		constructor(a?: any, b?: any); m_convexAPtr: any;
		m_convexBPtr: any;
		m_toshape1: btMatrix3x3;
		m_toshape0: btTransform;
		m_enableMargin: boolean;
		EnableMargin(enable?: boolean): void;
		Support0(d?: btVector3): btVector3;
		Support1(d?: btVector3): btVector3;
		Support(d?: btVector3): btVector3;
		Support(d?: btVector3, index?: any): btVector3;
	}
	export class MultiBodyInplaceSolverIslandCallback {
		constructor(solver?: btMultiBodyConstraintSolver, dispatcher?: btDispatcher); m_solverInfo: btContactSolverInfo;
		m_solver: btMultiBodyConstraintSolver;
		m_multiBodySortedConstraints: btMultiBodyConstraint;
		m_numMultiBodyConstraints: number;
		m_sortedConstraints: btTypedConstraint;
		m_numConstraints: number;
		m_debugDrawer: btIDebugDraw;
		m_dispatcher: btDispatcher;
		m_bodies: any;
		m_manifolds: any;
		m_constraints: any;
		m_multiBodyConstraints: any;
		setup(solverInfo?: btContactSolverInfo, sortedConstraints?: btTypedConstraint, numConstraints?: number, sortedMultiBodyConstraints?: btMultiBodyConstraint, numMultiBodyConstraints?: number, debugDrawer?: btIDebugDraw): void;
		processIsland(bodies?: btCollisionObject, numBodies?: number, manifolds?: btPersistentManifold, numManifolds?: number, islandId?: number): void;
		processConstraints(): void;
		IslandCallback(): any;
	}
	export class MyCallback {
		constructor(from?: btVector3, to?: btVector3, ignorePart?: number, ignoreTriangleIndex?: number); m_ignorePart: number;
		m_ignoreTriangleIndex: number;
		m_from: btVector3;
		m_to: btVector3;
		m_flags: number;
		m_hitFraction: any;
		reportHit(hitNormalLocal?: btVector3, hitFraction?: any, partId?: number, triangleIndex?: number): any;
		btTriangleRaycastCallback(from?: btVector3, to?: btVector3, flags?: number): any;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btTriangleCallback(): any;
	}
	export class MyInternalTriangleIndexCallback {
		constructor(colShape?: btCompoundShape, meshShape?: btGImpactMeshShape, depth?: any); m_gimpactShape: btGImpactMeshShape;
		m_colShape: btCompoundShape;
		m_depth: any;
		internalProcessTriangleIndex(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		btInternalTriangleIndexCallback(): any;
	}
	export class Node {
		constructor(); m_x: btVector3;
		m_q: btVector3;
		m_v: btVector3;
		m_f: btVector3;
		m_n: btVector3;
		m_im: any;
		m_area: any;
		m_leaf: btDbvtNode;
		m_battach: number;
		m_material: any;
		m_tag: any;
	}
	export class NodeLinks {
		constructor(); m_links: any;
	}
	export class Note {
		constructor(); m_text: any;
		m_offset: btVector3;
		m_rank: number;
		m_nodes: any;
		m_coords: any;
		m_tag: any;
	}
	export class PHullResult {
		constructor(arg1?: any); mVcount: number;
		mIndexCount: number;
		mFaceCount: number;
		mVertices: btVector3;
		m_Indices: any;
	}
	export class PlaneFlag {
		constructor(); undermap: string;
		overmap: string;
	}
	export class Point32 {
		constructor(x?: any, y?: any, z?: any); x: any;
		y: any;
		z: any;
		index: number;
		isZero(): boolean;
		cross(b?: any): any;
		cross(b?: any): any;
		dot(b?: any): any;
		dot(b?: any): any;
	}
	export class Point64 {
		constructor(x?: any, y?: any, z?: any); x: any;
		y: any;
		z: any;
		isZero(): boolean;
		dot(b?: any): any;
	}
	export class pointCmp { constructor(); }
	export class PointerArray {
		constructor(); m_size: number;
		m_capacity: number;
		m_data: any;
	}
	export class PointR128 {
		constructor(x?: any, y?: any, z?: any, denominator?: any); x: any;
		y: any;
		z: any;
		denominator: any;
		xvalue(): any;
		yvalue(): any;
		zvalue(): any;
	}
	export class Pool {
		constructor(); arrays: any;
		nextArray: any;
		freeObjects: any;
		arraySize: number;
		reset(): void;
		setArraySize(arraySize?: number): void;
		newObject(): any;
		freeObject(object?: any): void;
	}
	export class PoolArray {
		constructor(size?: number); next: any;
		array: any;
		size: number;
		init(): any;
	}
	export class Pose {
		constructor(); m_bvolume: boolean;
		m_bframe: boolean;
		m_volume: any;
		m_pos: any;
		m_wgh: any;
		m_com: btVector3;
		m_rot: btMatrix3x3;
		m_scl: btMatrix3x3;
		m_aqq: btMatrix3x3;
	}
	export class Rational128 {
		constructor(numerator?: any, denominator?: any); numerator: any;
		denominator: any;
		sign: number;
		isInt64: boolean;
		compare(b?: any): number;
		compare(b?: any): number;
		toScalar(): any;
	}
	export class Rational64 {
		constructor(numerator?: any, denominator?: any); m_numerator: any;
		m_denominator: any;
		sign: number;
		isNegativeInfinity(): boolean;
		isNaN(): boolean;
		compare(b?: any): number;
		toScalar(): any;
	}
	export class RaycastInfo {
		constructor(); m_contactNormalWS: btVector3;
		m_contactPointWS: btVector3;
		m_suspensionLength: any;
		m_hardPointWS: btVector3;
		m_wheelDirectionWS: btVector3;
		m_wheelAxleWS: btVector3;
		m_isInContact: boolean;
		m_groundObject: any;
	}
	export class RayFromToCaster {
		constructor(rayFrom?: btVector3, rayTo?: btVector3, mxt?: any); m_rayFrom: btVector3;
		m_rayTo: btVector3;
		m_rayNormalizedDirection: btVector3;
		m_mint: any;
		m_face: any;
		m_tests: number;
		Process(leaf?: btDbvtNode): void;
		Process(arg1?: btDbvtNode, arg2?: btDbvtNode): any;
		Process(arg1?: btDbvtNode): any;
		Process(n?: btDbvtNode, btScalar?: any): any;
		Descent(arg1?: btDbvtNode): any;
		AllLeaves(arg1?: btDbvtNode): any;
	}
	export class RayResultCallback {
		constructor(); m_closestHitFraction: any;
		m_collisionObject: btCollisionObject;
		m_collisionFilterGroup: number;
		m_collisionFilterMask: number;
		m_flags: number;
		hasHit(): boolean;
		needsCollision(proxy0?: btBroadphaseProxy): boolean;
		addSingleResult(rayResult?: any, normalInWorldSpace?: boolean): any;
	}
	export class RContact {
		constructor(); m_cti: any;
		m_node: any;
		m_c0: btMatrix3x3;
		m_c1: btVector3;
		m_c2: any;
		m_c3: any;
		m_c4: any;
	}
	export class RemovePairContainingProxy {
		constructor(); m_targetProxy: btBroadphaseProxy;
		processOverlap(pair?: btBroadphasePair): boolean;
	}
	export class RemovingOverlapCallback {
		constructor(); processOverlap(pair?: btBroadphasePair): boolean;
	}
	export class Result {
		constructor(); setShapeIdentifiersA(partId0?: number, index0?: number): void;
		setShapeIdentifiersB(partId1?: number, index1?: number): void;
		addContactPoint(normalOnBInWorld?: btVector3, pointInWorld?: btVector3, depth?: any): void;
	}
	export class SContact {
		constructor(); m_node: any;
		m_face: any;
		m_weights: btVector3;
		m_normal: btVector3;
		m_margin: any;
		m_friction: any;
		m_cfm: any;
	}
	export class sCti {
		constructor(); m_colObj: btCollisionObject;
		m_normal: btVector3;
		m_offset: any;
	}
	export class sFace {
		constructor(); n: btVector3;
		d: any;
		c: any;
		f: any;
		l: any;
		e: any;
		pass: any;
	}
	export class sHorizon {
		constructor(); cf: any;
		ff: any;
		nf: any;
	}
	export class sList {
		constructor(); root: any;
		count: any;
	}
	export class sMedium {
		constructor(); m_velocity: btVector3;
		m_pressure: any;
		m_density: any;
	}
	export class SoftBodyClusterData {
		constructor(); m_framexform: btTransformFloatData;
		m_locii: btMatrix3x3FloatData;
		m_invwi: btMatrix3x3FloatData;
		m_com: btVector3FloatData;
		m_vimpulses: btVector3FloatData;
		m_dimpulses: btVector3FloatData;
		m_lv: btVector3FloatData;
		m_av: btVector3FloatData;
		m_framerefs: btVector3FloatData;
		m_nodeIndices: any;
		m_masses: any;
		m_numFrameRefs: number;
		m_numNodes: number;
		m_numMasses: number;
		m_idmass: number;
		m_imass: number;
		m_nvimpulses: number;
		m_ndimpulses: number;
		m_ndamping: number;
		m_ldamping: number;
		m_adamping: number;
		m_matching: number;
		m_maxSelfCollisionImpulse: number;
		m_selfCollisionImpulseFactor: number;
		m_containsAnchor: number;
		m_collide: number;
		m_clusterIndex: number;
	}
	export class SoftBodyConfigData {
		constructor(); m_aeroModel: number;
		m_baumgarte: number;
		m_damping: number;
		m_drag: number;
		m_lift: number;
		m_pressure: number;
		m_volume: number;
		m_dynamicFriction: number;
		m_poseMatch: number;
		m_rigidContactHardness: number;
		m_kineticContactHardness: number;
		m_softContactHardness: number;
		m_anchorHardness: number;
		m_softRigidClusterHardness: number;
		m_softKineticClusterHardness: number;
		m_softSoftClusterHardness: number;
		m_softRigidClusterImpulseSplit: number;
		m_softKineticClusterImpulseSplit: number;
		m_softSoftClusterImpulseSplit: number;
		m_maxVolume: number;
		m_timeScale: number;
		m_velocityIterations: number;
		m_positionIterations: number;
		m_driftIterations: number;
		m_clusterIterations: number;
		m_collisionFlags: number;
	}
	export class SoftBodyFaceData {
		constructor(); m_normal: btVector3FloatData;
		m_material: any;
		m_nodeIndices: number;
		m_restArea: number;
	}
	export class SoftBodyLinkData {
		constructor(); m_material: any;
		m_nodeIndices: number;
		m_restLength: number;
		m_bbending: number;
	}
	export class SoftBodyMaterialData {
		constructor(); m_linearStiffness: number;
		m_angularStiffness: number;
		m_volumeStiffness: number;
		m_flags: number;
	}
	export class SoftBodyNodeData {
		constructor(); m_material: any;
		m_position: btVector3FloatData;
		m_previousPosition: btVector3FloatData;
		m_velocity: btVector3FloatData;
		m_accumulatedForce: btVector3FloatData;
		m_normal: btVector3FloatData;
		m_inverseMass: number;
		m_area: number;
		m_attach: number;
		m_pad: number;
	}
	export class SoftBodyPoseData {
		constructor(); m_rot: btMatrix3x3FloatData;
		m_scale: btMatrix3x3FloatData;
		m_aqq: btMatrix3x3FloatData;
		m_com: btVector3FloatData;
		m_positions: btVector3FloatData;
		m_weights: any;
		m_numPositions: number;
		m_numWeigts: number;
		m_bvolume: number;
		m_bframe: number;
		m_restVolume: number;
		m_pad: number;
	}
	export class SoftBodyTetraData {
		constructor(); m_c0: btVector3FloatData;
		m_material: any;
		m_nodeIndices: number;
		m_restVolume: number;
		m_c1: number;
		m_c2: number;
		m_pad: number;
	}
	export class SoftRigidAnchorData {
		constructor(); m_c0: btMatrix3x3FloatData;
		m_c1: btVector3FloatData;
		m_localFrame: btVector3FloatData;
		m_rigidBody: any;
		m_nodeIndex: number;
		m_c2: number;
	}
	export class SolverState {
		constructor(); sdt: any;
		isdt: any;
		velmrg: any;
		radmrg: any;
		updmrg: any;
	}
	export class Specs {
		constructor(); position: btVector3;
		erp: any;
		cfm: any;
		split: any;
	}
	export class SphereTriangleDetector {
		constructor(sphere?: btSphereShape, triangle?: btTriangleShape, contactBreakingThreshold?: any); m_sphere: btSphereShape;
		m_triangle: btTriangleShape;
		m_contactBreakingThreshold: any;
		getClosestPoints(input?: any, output?: any, debugDraw?: btIDebugDraw, swapResults?: boolean): void;
		collide(sphereCenter?: btVector3, point?: btVector3, resultNormal?: btVector3, depth?: any, timeOfImpact?: any, contactBreakingThreshold?: any): boolean;
		btDiscreteCollisionDetectorInterface(): any;
		pointInTriangle(vertices?: btVector3, normal?: btVector3, p?: btVector3): boolean;
		facecontains(p?: btVector3, vertices?: btVector3, normal?: btVector3): boolean;
	}
	export class sRayCast {
		constructor(); body: btSoftBody;
		feature: any;
		index: number;
		fraction: any;
	}
	export class sResults {
		constructor();
		status: any;
		witnesses: btVector3;
		normal: btVector3;
		distance: any;
	}
	export class sSimplex {
		constructor(); c: any;
		p: any;
		rank: any;
	}
	export class sStkCLN {
		constructor(n?: btDbvtNode, p?: btDbvtNode); node: btDbvtNode;
		parent: btDbvtNode;
	}
	export class sStkNN {
		constructor(na?: btDbvtNode, nb?: btDbvtNode); a: btDbvtNode;
		b: btDbvtNode;
	}
	export class sStkNP {
		constructor(n?: btDbvtNode, m?: any); node: btDbvtNode;
		mask: number;
	}
	export class sStkNPS {
		constructor(n?: btDbvtNode, m?: any, v?: any); node: btDbvtNode;
		mask: number;
		value: any;
	}
	export class sSV {
		constructor(); d: btVector3;
		w: btVector3;
	}
	export class SupportVertexCallback {
		constructor(supportVecWorld?: btVector3, trans?: btTransform); m_worldTrans: btTransform;
		m_maxDot: any;
		m_supportVecLocal: btVector3;
		m_supportVertexLocal: btVector3;
		processTriangle(triangle?: btVector3, partId?: number, triangleIndex?: number): void;
		GetSupportVertexWorldSpace(): btVector3;
		GetSupportVertexLocal(): btVector3;
		btTriangleCallback(): any;
	}
	export class SwappedCreateFunc {
		constructor(); CreateCollisionAlgorithm(ci?: btCollisionAlgorithmConstructionInfo, body0Wrap?: btCollisionObjectWrapper, body1Wrap?: btCollisionObjectWrapper): btCollisionAlgorithm;
		btCollisionAlgorithmCreateFunc(): any;
		btCollisionAlgorithmCreateFunc(): any;
	}
	export class Tetra {
		constructor(); m_n: any;
		m_rv: any;
		m_leaf: btDbvtNode;
		m_c0: btVector3;
		m_c1: any;
		m_c2: any;
		m_material: any;
		m_tag: any;
	}
	export class TetraShapeRetriever {
		constructor();
		getChildShape(index?: number): btCollisionShape;
		ChildShapeRetriever(): any;
	}
	export class TriangleShapeRetriever {
		constructor();
		getChildShape(index?: number): btCollisionShape;
		ChildShapeRetriever(): any;
	}
	export class TrimeshPrimitiveManager {
		constructor(meshInterface?: btStridingMeshInterface, part?: number);
		m_margin: any;
		m_meshInterface: btStridingMeshInterface;
		m_scale: btVector3;
		m_part: number;
		m_lock_count: number;
		vertexbase: any;
		numverts: number;
		type: any;
		stride: number;
		indexbase: any;
		indexstride: number;
		numfaces: number;
		indicestype: any;
		lock(): void;
		unlock(): void;
		is_trimesh(): boolean;
		get_primitive_count(): number;
		get_vertex_count(): number;
		get_indices(face_index?: number, i0?: number, i1?: number, i2?: number): void;
		get_vertex(vertex_index?: number, vertex?: btVector3): void;
		get_primitive_box(prim_index?: number, primbox?: btAABB): void;
		get_primitive_triangle(prim_index?: number, triangle?: btPrimitiveTriangle): void;
		get_bullet_triangle(prim_index?: number, triangle?: btTriangleShapeEx): void;
		btPrimitiveManagerBase(): any;
	}
	export class uint_key_func {
		constructor();
	}
	export class Vertex {
		constructor();
		next: any;
		prev: any;
		edges: any;
		firstNearbyFace: any;
		lastNearbyFace: any;
		point128: any;
		point: any;
		copy: number;
		dot(b?: any): any;
		xvalue(): any;
		yvalue(): any;
		zvalue(): any;
		receiveNearbyFaces(src?: any): void;
	}
	export class VertFlag {
		constructor();
		planetest: string;
		junk: string;
		undermap: string;
		overmap: string;
	}
	export class _btMprSimplex_t {
		constructor();
		ps: any;
		last: number;
	}
	export class _any {
		constructor();
		v: btVector3;
		v1: btVector3;
		v2: btVector3;
	}
}
declare namespace egret3d.ammo {
    /**
     *
     */
    abstract class TypedConstraint extends paper.BaseComponent {
        protected static readonly _helpVector3A: Vector3;
        protected static readonly _helpVector3B: Vector3;
        protected static readonly _helpVector3C: Vector3;
        protected static readonly _helpVector3D: Vector3;
        protected static readonly _helpQuaternionA: Quaternion;
        protected static readonly _helpQuaternionB: Quaternion;
        protected static readonly _helpMatrixA: Matrix;
        protected static readonly _helpMatrixB: Matrix;
        protected static readonly _helpMatrixC: Matrix;
        protected _collisionEnabled: boolean;
        protected _autoCalculateConnectedAnchor: boolean;
        protected _constraintType: Ammo.ConstraintType;
        protected _overrideNumSolverIterations: int;
        protected _breakingImpulseThreshold: number;
        protected readonly _anchor: Vector3;
        protected readonly _axisX: Vector3;
        protected readonly _axisY: Vector3;
        protected readonly _connectedAnchor: Vector3;
        protected readonly _connectedAxisX: Vector3;
        protected readonly _connectedAxisY: Vector3;
        protected _connectedBody: Rigidbody | null;
        protected _rigidbody: Rigidbody;
        protected _btTypedConstraint: Ammo.btTypedConstraint | null;
        protected abstract _createConstraint(): Ammo.btTypedConstraint | null;
        protected _createFrame(forward: Vector3, up: Vector3, constraintPoint: Vector3, frame: Matrix): void;
        protected _createFrames(frameA: Matrix, frameB: Matrix): void;
        uninitialize(): void;
        /**
         *
         */
        collisionEnabled: boolean;
        /**
         *
         */
        constraintType: Ammo.ConstraintType;
        /**
         *
         */
        overrideNumSolverIterations: Ammo.ConstraintType;
        /**
         *
         */
        breakingImpulseThreshold: Ammo.ConstraintType;
        /**
         *
         */
        anchor: Vector3;
        /**
         *
         */
        axisX: Vector3;
        /**
         *
         */
        axisY: Vector3;
        /**
         *
         */
        autoCalculateConnectedAnchor: boolean;
        /**
         *
         */
        connectedAnchor: Vector3;
        /**
         *
         */
        connectedAxisX: Vector3;
        /**
         *
         */
        connectedAxisY: Vector3;
        /**
         *
         */
        readonly rigidbody: Rigidbody;
        /**
         *
         */
        connectedBody: Rigidbody | null;
        readonly btTypedConstraint: Ammo.btTypedConstraint | null;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class CollisionObject extends paper.BaseComponent {
        readonly collisionObjectType: Ammo.CollisionObjectTypes;
        protected _collisionFlags: Ammo.CollisionFlags;
        protected _collisionGroups: Ammo.CollisionFilterGroups;
        protected _collisionMask: Ammo.CollisionFilterGroups;
        protected readonly _btPointer: Ammo.btVector3;
        protected _btCollisionObject: Ammo.btCollisionObject;
        protected _createCollisionObject(): Ammo.btCollisionObject;
        protected _getBTTransform(): Ammo.btTransform;
        uninitialize(): void;
        /**
         *
         */
        isStatic(): boolean;
        /**
         *
         */
        isKinematic(): boolean;
        /**
         *
         */
        isStaticOrKinematic(): boolean;
        /**
         *
         */
        isDynamic(): boolean;
        /**
         *
         */
        collisionFlags: Ammo.CollisionFlags;
        /**
         *
         */
        collisionGroups: Ammo.CollisionFilterGroups;
        /**
         *
         */
        collisionMask: Ammo.CollisionFilterGroups;
        /**
         *
         */
        readonly btCollisionObject: Ammo.btCollisionObject;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    abstract class CollisionShape extends paper.BaseComponent {
        protected _margin: number;
        protected _btCollisionShape: Ammo.btCollisionShape;
        protected abstract _createCollisionShape(): Ammo.btCollisionShape;
        uninitialize(): void;
        /**
         *
         */
        margin: number;
        readonly btCollisionShape: Ammo.btCollisionShape;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class CapsuleShape extends CollisionShape {
        protected _upAxis: Ammo.Axis;
        protected _radius: number;
        protected _height: number;
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btCollisionShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        upAxis: number;
        /**
         *
         */
        radius: number;
        /**
         *
         */
        height: number;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class Rigidbody extends CollisionObject {
        readonly collisionObjectType: Ammo.CollisionObjectTypes;
        private _mass;
        private _friction;
        private _rollingFriction;
        private _linearDamping;
        private _angularDamping;
        private _additionalDamping;
        private _additionalLinearDampingFactor;
        private _additionalLinearDampingThresholdSqr;
        private _additionalAngularDampingFactor;
        private _additionalAngularDampingThresholdSqr;
        private _restitution;
        private _linearSleepingThreshold;
        private _angularSleepingThreshold;
        private readonly _linearFactor;
        private readonly _angularFactor;
        private readonly _localInertia;
        protected _createCollisionObject(): Ammo.btRigidBody;
        /**
         *
         */
        collisionFlags: Ammo.CollisionFlags;
        /**
         *
         */
        mass: number;
        /**
         *
         */
        friction: number;
        /**
         *
         */
        rollingFriction: number;
        /**
         *
         */
        linearDamping: number;
        /**
         *
         */
        angularDamping: number;
        /**
         *
         */
        additionalDamping: boolean;
        /**
         *
         */
        additionalLinearDampingFactor: number;
        /**
         *
         */
        additionalLinearDampingThresholdSqr: number;
        /**
         *
         */
        additionalAngularDampingFactor: number;
        /**
         *
         */
        additionalAngularDampingThresholdSqr: number;
        /**
         *
         */
        restitution: number;
        /**
         *
         */
        linearSleepingThreshold: number;
        /**
         *
         */
        angularSleepingThreshold: number;
        /**
         *
         */
        linearFactor: Readonly<Vector3>;
        /**
         *
         */
        angularFactor: Readonly<Vector3>;
        /**
         *
         */
        readonly localInertia: Readonly<Vector3>;
        /**
         *
         */
        readonly btRigidbody: Ammo.btRigidBody;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class ConeTwistConstraint extends TypedConstraint {
        protected _swingSpan1: number;
        protected _swingSpan2: number;
        protected _twistSpan: number;
        protected _softness: number;
        protected _biasFactor: number;
        protected _relaxationFactor: number;
        protected _updateLimit(btConstraint: Ammo.btConeTwistConstraint): void;
        protected _createConstraint(): Ammo.btConeTwistConstraint | null;
        /**
         *
         */
        swingSpan1: number;
        /**
         *
         */
        swingSpan2: number;
        /**
         *
         */
        twistSpan: number;
        /**
         *
         */
        softness: number;
        /**
         *
         */
        biasFactor: number;
        /**
         *
         */
        relaxationFactor: number;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class FixedConstraint extends TypedConstraint {
        protected _createConstraint(): Ammo.btFixedConstraint | null;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class HingeConstraint extends TypedConstraint {
        protected _motorEnabled: boolean;
        protected _limitEnabled: boolean;
        protected _targetVelocity: number;
        protected _maxMotorImpulse: number;
        protected _lowAngular: number;
        protected _highAngular: number;
        protected _softness: number;
        protected _biasFactor: number;
        protected _relaxationFactor: number;
        protected _updateLimit(): void;
        protected _createConstraint(): Ammo.btHingeConstraint | null;
        /**
         *
         */
        motorEnabled: boolean;
        /**
         *
         */
        targetVelocity: number;
        /**
         *
         */
        maxMotorImpulse: number;
        /**
         *
         */
        limitEnabled: boolean;
        /**
         *
         */
        lowAngularLimit: number;
        /**
         *
         */
        highAngularLimit: number;
        /**
         *
         */
        softnessLimit: number;
        /**
         *
         */
        biasFactorLimit: number;
        /**
         *
         */
        relaxationFactor: number;
        /**
         *
         */
        readonly hingeAngle: number;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class SliderConstraint extends TypedConstraint {
        protected _lowerLinearLimit: number;
        protected _upperLinearLimit: number;
        protected _lowerAngularLimit: number;
        protected _upperAngularLimit: number;
        protected _createConstraint(): Ammo.btSliderConstraint | null;
        /**
         *
         */
        lowerLinearLimit: number;
        /**
         *
         */
        upperLinearLimit: number;
        /**
         *
         */
        lowerAngularLimit: number;
        /**
         *
         */
        upperAngularLimit: number;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class GhostObject extends CollisionObject {
        readonly collisionObjectType: Ammo.CollisionObjectTypes;
        protected _createCollisionObject(): Ammo.btCollisionObject;
        initialize(): void;
        collisionFlags: Ammo.CollisionFlags;
        readonly btGhostObject: Ammo.btGhostObject;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class BoxShape extends CollisionShape {
        protected readonly _size: Vector3;
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btBoxShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        size: Readonly<Vector3>;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class BallSocketConstraint extends TypedConstraint {
        protected _createConstraint(): Ammo.btPoint2PointConstraint | null;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class PhysicsSystem extends paper.BaseSystem {
        private static _helpVector3A;
        private static _helpVector3B;
        private static _helpVector3C;
        private static _helpVector3D;
        private static _helpQuaternionA;
        private static _helpTransformA;
        private static _helpTransformB;
        protected readonly _interests: ({
            componentClass: typeof Rigidbody;
        } | {
            componentClass: (typeof CapsuleShape | typeof BoxShape | typeof ConeShape | typeof ConvexHullShape | typeof CylinderShape | typeof HeightfieldTerrainShape | typeof SphereShape)[];
            type: paper.InterestType;
        } | {
            componentClass: (typeof ConeTwistConstraint | typeof FixedConstraint | typeof HingeConstraint | typeof SliderConstraint)[];
            type: paper.InterestType;
        })[];
        private _worldType;
        private _collisionType;
        private _broadphaseType;
        private readonly _axis3SweepBroadphaseMin;
        private readonly _axis3SweepBroadphaseMax;
        private readonly _gravity;
        private _btCollisionWorld;
        private _btDynamicsWorld;
        protected _updateGravity(): void;
        onAwake(): void;
        onAddGameObject(gameObject: paper.GameObject, group: paper.GameObjectGroup): void;
        onAddComponent(component: CollisionShape | TypedConstraint, group: paper.GameObjectGroup): void;
        onUpdate(deltaTime: number): void;
        /**
         *
         */
        /**
         *
         */
        gravity: Readonly<Vector3>;
        readonly btCollisionWorld: Ammo.btCollisionWorld;
        readonly btDynamicsWorld: Ammo.btDynamicsWorld | null;
    }
}
declare namespace egret3d.ammo {
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class ConeShape extends CollisionShape {
        protected _upAxis: Ammo.Axis;
        protected _radius: number;
        protected _height: number;
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btCollisionShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        upAxis: number;
        /**
         *
         */
        radius: number;
        /**
         *
         */
        height: number;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class ConvexHullShape extends CollisionShape {
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btConvexHullShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class CylinderShape extends CollisionShape {
        protected _upAxis: Ammo.Axis;
        protected readonly _size: Vector3;
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btCollisionShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        upAxis: number;
        /**
         *
         */
        size: Readonly<Vector3>;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
declare namespace egret3d.ammo {
    /**
     * TODO
     */
    class HeightfieldTerrainShape extends CollisionShape {
        protected _upAxis: Ammo.Axis;
        protected _createCollisionShape(): Ammo.btHeightfieldTerrainShape;
        /**
         *
         */
        upAxis: number;
    }
}
declare namespace egret3d.ammo {
    /**
     *
     */
    class SphereShape extends CollisionShape {
        protected _radius: number;
        protected readonly _scale: Vector3;
        protected _createCollisionShape(): Ammo.btSphereShape;
        protected _updateScale(btCollisionShape: Ammo.btCollisionShape): void;
        /**
         *
         */
        radius: number;
        /**
         *
         */
        scale: Readonly<Vector3>;
    }
}
