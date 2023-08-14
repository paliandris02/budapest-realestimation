type EstimationRequest = {
  district: string;
  area_size: number | string;
  floors: string;
  building_material: string;
  type_of_heating: string;
  condition_of_real_estate: string;
  convenience_level: string;
  year_built: string;
  ground_area_size: number | string;
  orientation: string;
  ownership_status: string;
  listing_type: string;
  property_type: string;
};

export default EstimationRequest;
