export interface Assets {
  type: "asset";

  id: string;
  locationId?: string;
  name: string;
  parentId?: string;
  sensorType?: string;
  status?: string;
  gatewayId?: string;
  sensorId?: string;
}
